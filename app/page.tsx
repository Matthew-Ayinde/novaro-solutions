import Homepage from '@/components/homepage/Homepage'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novaro Solutions - Customer Service & Support Solutions',
  description: 'Novaro Solutions provides 24/7 customer service, technical support, and call center solutions. We handle inquiries, technical issues, and customer care so you can focus on growing your business.',
  keywords: [
    'customer service solutions',
    'call center outsourcing',
    'customer support services',
    '24/7 customer support',
    'technical support services',
    'help desk outsourcing',
    'customer care solutions',
    'live chat support'
  ],
  openGraph: {
    title: 'Professional Customer Service & Support Solutions | Novaro Solutions',
    description: 'Transform your customer experience with our professional support team. 24/7 availability, expert troubleshooting, and seamless integration with your business.',
    url: 'https://novarosolutions.com',
    images: [
      {
        url: 'https://res.cloudinary.com/matthew-ayinde/image/upload/v1765277527/logo_ztqc4e.jpg',
        width: 1200,
        height: 630,
        alt: 'Novaro Solutions Customer Service',
      },
    ],
  },
  alternates: {
    canonical: 'https://novarosolutions.com',
  },
}

const page = () => {
  return (
    <div>
      <Homepage />
    </div>
  )
}

export default page
