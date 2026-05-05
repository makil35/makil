/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import { Body, Button, Container, Head, Heading, Hr, Html, Link, Preview, Text } from 'npm:@react-email/components@0.0.22'

interface Props { siteName: string; siteUrl: string; recipient: string; confirmationUrl: string }

export const SignupEmail = ({ siteName, recipient, confirmationUrl }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Confirmez votre email — {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={brand}>MAKIL</Heading>
        <Hr style={hr} />
        <Heading style={h1}>Confirmez votre email</Heading>
        <Text style={text}>
          Merci de confirmer votre adresse <Link href={`mailto:${recipient}`} style={link}>{recipient}</Link> en cliquant sur le bouton ci-dessous.
        </Text>
        <Button style={button} href={confirmationUrl}>Confirmer mon email</Button>
        <Text style={footer}>Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</Text>
      </Container>
    </Body>
  </Html>
)
export default SignupEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '48px 32px', maxWidth: '560px' }
const brand = { fontSize: '20px', letterSpacing: '0.4em', fontWeight: 400 as const, color: '#000', margin: '0', textAlign: 'center' as const, textTransform: 'uppercase' as const }
const hr = { borderColor: '#e5e5e5', margin: '24px 0 32px' }
const h1 = { fontSize: '22px', fontWeight: 400 as const, color: '#000', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#333', lineHeight: '1.7', margin: '0 0 24px' }
const link = { color: '#000', textDecoration: 'underline' }
const button = { backgroundColor: '#000', color: '#fff', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' as const, borderRadius: '0', padding: '14px 28px', textDecoration: 'none' }
const footer = { fontSize: '12px', color: '#999', margin: '32px 0 0' }
