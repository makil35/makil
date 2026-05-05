/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from 'npm:@react-email/components@0.0.22'

interface Props { token: string }

export const ReauthenticationEmail = ({ token }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre code de vérification</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={brand}>MAKIL</Heading>
        <Hr style={hr} />
        <Heading style={h1}>Confirmer votre identité</Heading>
        <Text style={text}>Utilisez le code ci-dessous :</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>Ce code expire prochainement. Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</Text>
      </Container>
    </Body>
  </Html>
)
export default ReauthenticationEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '48px 32px', maxWidth: '560px' }
const brand = { fontSize: '20px', letterSpacing: '0.4em', fontWeight: 400 as const, color: '#000', margin: '0', textAlign: 'center' as const, textTransform: 'uppercase' as const }
const hr = { borderColor: '#e5e5e5', margin: '24px 0 32px' }
const h1 = { fontSize: '22px', fontWeight: 400 as const, color: '#000', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#333', lineHeight: '1.7', margin: '0 0 16px' }
const codeStyle = { fontFamily: 'Courier, monospace', fontSize: '28px', letterSpacing: '0.4em', fontWeight: 700 as const, color: '#000', margin: '16px 0 32px', textAlign: 'center' as const }
const footer = { fontSize: '12px', color: '#999', margin: '32px 0 0' }
