import { createClient } from 'npm:@supabase/supabase-js@2'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
  const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
  const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

  const authHeader = req.headers.get('Authorization') ?? ''
  if (!authHeader) return json({ error: 'Unauthorized' }, 401)

  const asUser = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const admin = createClient(SUPABASE_URL, SERVICE_KEY)

  const { data: userData } = await asUser.auth.getUser()
  const user = userData?.user
  if (!user) return json({ error: 'Unauthorized' }, 401)

  const { data: isAdmin } = await admin.rpc('has_role', { _user_id: user.id, _role: 'admin' })
  if (!isAdmin) return json({ error: 'Forbidden' }, 403)

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid request' }, 400)
  }

  const submissionId = String(body.submission_id ?? '')
  const reply = String(body.reply ?? '').trim()
  if (!/^[0-9a-f-]{36}$/i.test(submissionId)) return json({ error: 'Invalid submission' }, 400)
  if (reply.length < 1 || reply.length > 5000) return json({ error: 'Invalid reply' }, 400)

  const { data: submission, error: readError } = await admin
    .from('contact_submissions')
    .select('id, name, email, message')
    .eq('id', submissionId)
    .maybeSingle()

  if (readError || !submission) return json({ error: 'Submission not found' }, 404)

  let sent = true
  let suppressed = false
  try {
    const result = await sendTemplateEmail('contact-reply', submission.email, {
      templateData: { name: submission.name, reply, original: submission.message },
      idempotencyKey: `contact-reply-${submissionId}-${Date.now()}`,
      replyTo: 'richard@makil.fr',
    })
    sent = result.sent
    suppressed = !result.sent
    const { error: logError } = await admin.from('email_send_log').insert({
      template_name: 'contact-reply',
      recipient_email: submission.email,
      status: result.sent ? 'sent' : 'suppressed',
      error_message: result.sent ? null : 'Recipient is suppressed',
    })
    if (logError) console.error('Failed to write email_send_log', { error: logError })
  } catch (err) {
    console.error('Reply dispatch failed', { err: String(err) })
    const { error: logError } = await admin.from('email_send_log').insert({
      template_name: 'contact-reply',
      recipient_email: submission.email,
      status: 'failed',
      error_message: err instanceof Error ? err.message : String(err),
    })
    if (logError) console.error('Failed to write email_send_log', { error: logError })
    return json({ error: 'Delivery failed' }, 502)
  }

  const { error: updateError } = await admin
    .from('contact_submissions')
    .update({
      status: 'replied',
      replied_at: new Date().toISOString(),
      reply_message: reply,
    })
    .eq('id', submissionId)
  if (updateError) console.error('Failed to update submission', { error: updateError })

  return json({ success: true, sent, suppressed })
})
