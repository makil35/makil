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
    <Preview>Your message has been received · MAKIL</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>MAKIL</Heading>
        <Hr style={hr} />
        <Text style={text}>
          {name ? `${name},` : 'Hello,'}
        </Text>
        <Text style={text}>
          Your message has been received. Richard will come back to you personally, shortly.
        </Text>
        <Text style={text}>
          With my warmest regards,
        </Text>
        <Text style={signature}>Makil-Herrero Richard</Text>
        <Hr style={hr} />
        <Text style={footer}>MAKIL · By invitation only</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Your message has been received · MAKIL',
  displayName: 'Contact confirmation (visitor)',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '48px 32px', maxWidth: '560px' }
const h1 = { fontSize: '22px', letterSpacing: '0.4em', fontWeight: 400 as const, color: '#000000', margin: '0 0 8px', textTransform: 'uppercase' as const, textAlign: 'center' as const }
const hr = { borderColor: '#e5e5e5', margin: '24px 0' }
const text = { fontSize: '15px', color: '#222', lineHeight: '1.7', margin: '0 0 18px' }
const signature = { fontSize: '15px', fontStyle: 'italic' as const, color: '#000', margin: '24px 0 0' }
const footer = { fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#999', margin: '24px 0 0', textAlign: 'center' as const }
