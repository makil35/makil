/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
}

const ContactConfirmationEmail = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Message received · MAKIL</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>MAKIL</Heading>
        <Text style={kicker}>Paris · By introduction only</Text>
        <Hr style={hr} />
        <Text style={text}>
          {name ? `${name},` : 'Hello,'}
        </Text>
        <Text style={text}>
          Thank you for writing. The message has reached me directly, and I have read it
          myself. No assistant, no intermediary.
        </Text>
        <Text style={text}>
          I answer personally, generally within two working days. Should the matter be
          time-sensitive, a reply to this message saying so in one line is enough.
        </Text>
        <Text style={text}>
          Whatever has been written stays between us.
        </Text>

        <Text style={signature}>Makil-Herrero Richard</Text>
        <Text style={signatureRole}>Private Adviser · MAKIL</Text>
        <Text style={signatureContact}>richard@makil.fr · makil.fr</Text>
        <Hr style={hr} />
        <Text style={footer}>MAKIL · By invitation only</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Message received · MAKIL',
  displayName: 'Contact confirmation (visitor)',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '48px 32px', maxWidth: '560px' }
const h1 = { fontSize: '22px', letterSpacing: '0.4em', fontWeight: 400 as const, color: '#000000', margin: '0 0 8px', textTransform: 'uppercase' as const, textAlign: 'center' as const }
const hr = { borderColor: '#e5e5e5', margin: '24px 0' }
const text = { fontSize: '15px', color: '#222', lineHeight: '1.7', margin: '0 0 18px' }
const kicker = { fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#999', margin: '0', textAlign: 'center' as const }
const signatureRole = { fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#666', margin: '6px 0 0' }
const signatureContact = { fontSize: '12px', color: '#888', margin: '4px 0 0' }
const signature = { fontSize: '15px', fontStyle: 'italic' as const, color: '#000', margin: '24px 0 0' }
const footer = { fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#999', margin: '24px 0 0', textAlign: 'center' as const }
