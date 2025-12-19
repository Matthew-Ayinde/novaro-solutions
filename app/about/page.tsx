import AboutUs from '@/components/about/AboutUs'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Your Brand Ambassadors',
  description: 'Learn about Novaro Solutions: We are more than a call center. We are your brand ambassadors, providing empathy, expertise, and efficiency to bridge the gap between businesses and customers.',
  keywords: [
    'about novaro solutions',
    'customer service company',
    'call center company',
    'customer support team',
    'brand ambassadors',
    'customer experience experts',
    'support outsourcing company'
  ],
  openGraph: {
    title: 'About Novaro Solutions - Your Brand Ambassadors',
    description: 'Discover how we help growing businesses deliver exceptional customer experiences through dedicated support teams and seamless integration.',
    url: 'https://novarosolutions.com/about',
    images: [
      {
        url: 'https://res.cloudinary.com/matthew-ayinde/image/upload/v1765277527/logo_ztqc4e.jpg',
        width: 1200,
        height: 630,
        alt: 'About Novaro Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://novarosolutions.com/about',
  },
}

const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  )
}

export default page
