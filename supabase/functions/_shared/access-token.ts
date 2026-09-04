// Shared signing helpers for the house access token.

const b64url = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

export async function signPayload(payload: string, secret: string) {
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

export async function mintAccessToken(secret: string, ttlMs: number) {
  const exp = Date.now() + ttlMs
  const payload = String(exp)
  return { token: `${payload}.${await signPayload(payload, secret)}`, exp }
}
