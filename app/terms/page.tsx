import type { Metadata } from 'next'
import TermsPageClient from './terms-client'

export const metadata: Metadata = {
  title: 'Terms and Conditions - AutoFactsCheck',
  description: 'Read the terms and conditions for using Car Bronze services. Understand your rights and responsibilities.',
  openGraph: {
    title: 'Terms and Conditions - Car Bronze',
      description: 'Our terms explain the rules for using Car Bronze vehicle history reports.',
    url: 'https://autofactscheck.com/terms',
    type: 'website',
  },
}

export default function TermsPage() {
  return <TermsPageClient />
}
