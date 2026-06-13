import type { Metadata } from 'next'
import RefundPolicyPageClient from './refund-policy-client'

export const metadata: Metadata = {
  title: 'Refund Policy - Car Bronze',
  description: 'Learn about Car Bronze refund policy and how to request a refund for your vehicle history report.',
  openGraph: {
    title: 'Refund Policy - Car Bronze',
    description: 'Our customer-friendly refund policy details.',
    url: 'https://carbronze.com/refund-policy',
    type: 'website',
  },
}

export default function RefundPolicyPage() {
  return <RefundPolicyPageClient />
}
