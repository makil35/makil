import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const OWNER_EMAIL = 'richard@makil.fr'

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !serviceKey) {
    console.error('Missing required environment variables')
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  let name = ''
  let email = ''
  let message = ''
  let honeypot = ''
  let elapsedMs = 0
  try {
    const body = await req.json()
    name = typeof body.name === 'string' ? body.name.trim() : ''
    email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    message = typeof body.message === 'string' ? body.message.trim() : ''
    honeypot = typeof body.company === 'string' ? body.company.trim() : ''
    elapsedMs = typeof body.elapsedMs === 'number' ? body.elapsedMs : 0
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON in request body' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Anti-spam: honeypot filled or form submitted too fast => silently accept, never send.
  if (honeypot.length > 0 || elapsedMs < 2000) {
    console.warn('Contact submission rejected by anti-spam', { honeypot: honeypot.length > 0, elapsedMs })
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Basic content heuristics against link-spam
  const linkCount = (message.match(/https?:\/\//gi) ?? []).length
  if (linkCount > 3) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  if (
    name.length < 1 || name.length > 120 ||
    email.length < 3 || email.length > 255 || !isEmail(email) ||
    message.length < 1 || message.length > 5000
  ) {
    return new Response(JSON.stringify({ error: 'Invalid input' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const supabase = createClient(supabaseUrl, serviceKey)

  const submissionId = crypto.randomUUID()
  const { error: insertError } = await supabase
    .from('contact_submissions')
    .insert({ id: submissionId, name, email, message })

  if (insertError) {
    console.error('Failed to store contact submission', { error: insertError })
    return new Response(JSON.stringify({ error: 'Failed to store submission' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Send emails server-side with the service role key so the email endpoint
  // is never reachable with the public anon key.
  const invoke = (body: Record<string, unknown>) =>
    fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${serviceKey}`,
        apikey: serviceKey,
      },
      body: JSON.stringify(body),
    }).catch((err) => {
      console.error('Email dispatch failed', { err: String(err) })
      return null
    })

  await invoke({
    templateName: 'contact-notification',
    recipientEmail: OWNER_EMAIL,
    idempotencyKey: `contact-notify-${submissionId}`,
    templateData: { name, email, message },
  })

  await invoke({
    templateName: 'contact-confirmation',
    recipientEmail: email,
    idempotencyKey: `contact-confirm-${submissionId}`,
    templateData: { name },
  })

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
