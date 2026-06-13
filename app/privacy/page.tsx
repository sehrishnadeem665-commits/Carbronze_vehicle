import type { Metadata } from 'next'
import PrivacyPageClient from './privacy-client'

export const metadata: Metadata = {
  title: 'Privacy Policy - Car Bronze',
  description: 'Read our privacy policy to understand how Car Bronze collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy - Car Bronze',
    description: 'Our commitment to protecting your personal information and privacy.',
    url: 'https://carbronze.com/privacy',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
