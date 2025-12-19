import Privacy from '@/components/privacy/Privacy'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Security & Protection',
  description: 'Learn how Novaro Solutions protects your data. Our comprehensive privacy policy outlines data collection, usage, security measures, and your rights.',
  openGraph: {
    title: 'Privacy Policy | Novaro Solutions',
    description: 'Your privacy and data security are our top priorities. Read our privacy policy to understand how we protect your information.',
    url: 'https://novarosolutions.com/privacy',
  },
  alternates: {
    canonical: 'https://novarosolutions.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const page = () => {
  return (
    <div>
      <Privacy />
    </div>
  )
}

export default page