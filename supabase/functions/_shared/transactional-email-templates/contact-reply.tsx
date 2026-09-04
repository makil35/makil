/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  reply?: string
  original?: string
}

const ContactReplyEmail = ({ name, reply, original }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Réponse de Makil-Herrero Richard</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>MAKIL</Heading>
        <Text style={kicker}>Réponse confidentielle</Text>
        <Hr style={hr} />
        <Section>
          <Text style={value}>{name ? `${name},` : 'Bonjour,'}</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' as const, marginTop: '16px' }}>
            {reply ?? ''}
          </Text>
          <Text style={{ ...value, marginTop: '28px' }}>Makil-Herrero Richard</Text>
        </Section>
        {original ? (
          <>
            <Hr style={hr} />
            <Text style={label}>Votre message</Text>
            <Text style={{ ...quote, whiteSpace: 'pre-wrap' as const }}>{original}</Text>
          </>
        ) : null}
        <Hr style={hr} />
        <Text style={footer}>makil.fr · richard@makil.fr</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactReplyEmail,
  subject: 'MAKIL · Réponse à votre message',
  displayName: 'Réponse à un message de contact',
  previewData: {
    name: 'Jane Doe',
    reply: 'Je vous propose un échange en fin de semaine.',
    original: 'Bonjour, j\'aimerais échanger.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '40px 32px', maxWidth: '560px' }
const h1 = { fontSize: '20px', letterSpacing: '0.4em', fontWeight: 400 as const, color: '#000000', margin: '0 0 8px', textTransform: 'uppercase' as const }
const kicker = { fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#888', margin: '0 0 24px' }
const hr = { borderColor: '#e5e5e5', margin: '24px 0' }
const label = { fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#888', margin: '16px 0 4px' }
const value = { fontSize: '15px', color: '#000000', lineHeight: '1.7', margin: '0' }
const quote = { fontSize: '14px', color: '#666', lineHeight: '1.6', margin: '0' }
const footer = { fontSize: '11px', color: '#999', margin: '24px 0 0', textAlign: 'center' as const }
