import ContactUs from '@/components/contact/ContactUs'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started Today',
  description: 'Ready to transform your customer service? Contact Novaro Solutions for a free consultation. We respond within 24 hours. Available globally with remote support capabilities.',
  keywords: [
    'contact novaro solutions',
    'customer service quote',
    'call center consultation',
    'get customer support',
    'contact support services',
    'customer service inquiry'
  ],
  openGraph: {
    title: 'Contact Novaro Solutions - Free Consultation',
    description: 'Get in touch with our team for a free consultation. We will help you build the perfect customer support solution for your business.',
    url: 'https://novarosolutions.com/contact',
    images: [
      {
        url: 'https://res.cloudinary.com/matthew-ayinde/image/upload/v1765277527/logo_ztqc4e.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Novaro Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://novarosolutions.com/contact',
  },
}

const page = () => {
  return (
    <div>
      <ContactUs />
    </div>
  )
}

export default page
