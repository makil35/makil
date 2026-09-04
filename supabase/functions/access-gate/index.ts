import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}


const OWNER_EMAIL = 'richard@makil.fr'
const TOKEN_TTL_HOURS = 12

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

const b64url = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

async function sign(payload: string, secret: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))
  return b64url(new Uint8Array(sig))
}

const timingSafeEqual = (a: string, b: string) => {
  const enc = new TextEncoder()
  const x = enc.encode(a)
  const y = enc.encode(b)
  let diff = x.length ^ y.length
  const len = Math.max(x.length, y.length)
  for (let i = 0; i < len; i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0)
  return diff === 0
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const accessKey = Deno.env.get('SITE_ACCESS_KEY')
  const tokenSecret = Deno.env.get('ACCESS_TOKEN_SECRET')
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

  if (!accessKey || !tokenSecret) {
    console.error('Access gate is not configured')
    return json({ error: 'Server configuration error' }, 500)
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const action = typeof body.action === 'string' ? body.action : ''

  if (action === 'verify') {
    const key = typeof body.key === 'string' ? body.key.trim() : ''
    if (!key || key.length > 200) return json({ valid: false }, 200)
    // Slow down brute force attempts.
    await new Promise((r) => setTimeout(r, 400))
    if (!timingSafeEqual(key, accessKey)) return json({ valid: false }, 200)

    const exp = Date.now() + TOKEN_TTL_HOURS * 60 * 60 * 1000
    const payload = String(exp)
    const token = `${payload}.${await sign(payload, tokenSecret)}`
    return json({ valid: true, token, exp })
  }

  if (action === 'validate') {
    const token = typeof body.token === 'string' ? body.token : ''
    const [payload, sig] = token.split('.')
    if (!payload || !sig) return json({ valid: false })
    const exp = Number(payload)
    if (!Number.isFinite(exp) || exp < Date.now()) return json({ valid: false })
    const expected = await sign(payload, tokenSecret)
    return json({ valid: timingSafeEqual(sig, expected) })
  }

  if (action === 'request') {
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const honeypot = typeof body.company === 'string' ? body.company.trim() : ''
    const elapsedMs = typeof body.elapsedMs === 'number' ? body.elapsedMs : 0

    if (honeypot.length > 0 || elapsedMs < 2000) return json({ success: true })
    if ((message.match(/https?:\/\//gi) ?? []).length > 3) return json({ success: true })
    if (
      name.length < 1 || name.length > 120 ||
      !isEmail(email) || email.length > 255 ||
      message.length > 5000
    ) {
      return json({ error: 'Invalid input' }, 400)
    }

    try {
      await sendTemplateEmail('contact-notification', OWNER_EMAIL, {
        idempotencyKey: `access-request-${crypto.randomUUID()}`,
        replyTo: email,
        templateData: {
          name,
          email,
          message: `[Access key request]\n\n${message || 'No message provided.'}`,
        },
      })
    } catch (err) {
      console.error('Access request email failed', { err: String(err) })
      return json({ error: 'Failed to send request' }, 502)
    }

    return json({ success: true })

  }

  return json({ error: 'Unknown action' }, 400)
})
