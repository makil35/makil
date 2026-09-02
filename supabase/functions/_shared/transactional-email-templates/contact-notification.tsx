/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  message?: string
}

const ContactNotificationEmail = ({ name, email, message }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouveau message via le site MAKIL</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>MAKIL</Heading>
        <Text style={kicker}>Nouvelle demande confidentielle</Text>
        <Hr style={hr} />
        <Section>
          <Text style={label}>Nom</Text>
          <Text style={value}>{name ?? '·'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email ?? '·'}</Text>
          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' as const }}>{message ?? '·'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Message envoyé depuis makil.fr</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (d: Record<string, any>) => `MAKIL · Nouvelle demande de ${d.name ?? 'visiteur'}`,
  displayName: 'Notification contact (admin)',
  to: 'richard@makil-private.com',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', message: 'Bonjour, j\'aimerais échanger.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '40px 32px', maxWidth: '560px' }
const h1 = { fontSize: '20px', letterSpacing: '0.4em', fontWeight: 400 as const, color: '#000000', margin: '0 0 8px', textTransform: 'uppercase' as const }
const kicker = { fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#888', margin: '0 0 24px' }
const hr = { borderColor: '#e5e5e5', margin: '24px 0' }
const label = { fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#888', margin: '16px 0 4px' }
const value = { fontSize: '15px', color: '#000000', lineHeight: '1.6', margin: '0' }
const footer = { fontSize: '11px', color: '#999', margin: '24px 0 0', textAlign: 'center' as const }
