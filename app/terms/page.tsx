import Terms from '@/components/terms/Terms'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Service Agreement',
  description: 'Review Novaro Solutions terms of service. Clear guidelines for our partnership, service delivery, payment terms, and client responsibilities.',
  openGraph: {
    title: 'Terms of Service | Novaro Solutions',
    description: 'Understand our terms of service and what to expect from our customer support solutions partnership.',
    url: 'https://novarosolutions.com/terms',
  },
  alternates: {
    canonical: 'https://novarosolutions.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const page = () => {
  return (
    <div>
        <Terms />
    </div>
  )
}

export default page