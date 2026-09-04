/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Link, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  url?: string
  validUntil?: string
  note?: string
}

const AccessInvitationEmail = ({ name, url, validUntil, note }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your private access to MAKIL</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>MAKIL</Heading>
        <Text style={kicker}>Private access</Text>
        <Hr style={hr} />
        <Section>
          <Text style={value}>{name ? `${name},` : 'Bonjour,'}</Text>
          <Text style={{ ...value, marginTop: '16px' }}>
            {note ||
              'This house is entered by key only. The link below opens it for you, personally.'}
          </Text>
          <Text style={{ marginTop: '28px' }}>
            <Link href={url ?? 'https://makil.fr'} style={link}>
              Enter the house
            </Link>
          </Text>
          {validUntil ? (
            <Text style={{ ...quote, marginTop: '20px' }}>Valid until {validUntil}.</Text>
          ) : null}
          <Text style={{ ...value, marginTop: '28px' }}>Makil-Herrero Richard</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>makil.fr · richard@makil.fr</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AccessInvitationEmail,
  subject: 'MAKIL · Your private access',
  displayName: 'Invitation — clé d\'accès',
  previewData: {
    name: 'Jane Doe',
    url: 'https://makil.fr/?access=example',
    validUntil: '12 September 2026',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '40px 32px', maxWidth: '560px' }
const h1 = { fontSize: '20px', letterSpacing: '0.4em', fontWeight: 400 as const, color: '#000000', margin: '0 0 8px', textTransform: 'uppercase' as const }
const kicker = { fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#888', margin: '0 0 24px' }
const hr = { borderColor: '#e5e5e5', margin: '24px 0' }
const value = { fontSize: '15px', color: '#000000', lineHeight: '1.7', margin: '0' }
const quote = { fontSize: '13px', color: '#666', lineHeight: '1.6', margin: '0' }
const link = { fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#000000', borderBottom: '1px solid #000000', textDecoration: 'none' }
const footer = { fontSize: '11px', color: '#999', margin: '24px 0 0', textAlign: 'center' as const }
