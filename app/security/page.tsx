import type { Metadata } from 'next'
import SecurityPageClient from './security-client'

export const metadata: Metadata = {
  title: 'Security - AutoFactsCheck',
  description: 'Learn about Car Bronze security measures protecting your vehicle history data with industry-leading encryption and privacy standards.',
  openGraph: {
    title: 'Security - Car Bronze',
    description: 'Our commitment to data security and privacy.',
    url: 'https://autofactscheck.com/security',
    type: 'website',
  },
}

export default function SecurityPage() {
  return <SecurityPageClient />
}
