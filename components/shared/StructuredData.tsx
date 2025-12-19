import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Novaro Solutions',
    alternateName: 'Novaro Global Limited',
    url: 'https://novarosolutions.com',
    logo: 'https://res.cloudinary.com/matthew-ayinde/image/upload/v1765277527/logo_ztqc4e.jpg',
    description: 'Professional customer service and support solutions. 24/7 call center, technical support, and customer care services for growing businesses.',
    email: 'support@novarosolutions.com',
    telephone: '+234-802-573-3103',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Remote',
      addressCountry: 'Global',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+234-802-573-3103',
        contactType: 'Customer Service',
        email: 'support@novarosolutions.com',
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'support@novarosolutions.com',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://twitter.com/novarosolutions',
      'https://linkedin.com/company/novaro-solutions',
      'https://facebook.com/novarosolutions',
    ],
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Novaro Solutions Team',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Customer Support Services',
    provider: {
      '@type': 'Organization',
      name: 'Novaro Solutions',
      url: 'https://novarosolutions.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://novarosolutions.com/contact',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+234-802-573-3103',
      },
      serviceLocation: {
        '@type': 'Place',
        name: 'Remote & Global',
      },
      availableLanguage: 'English',
    },
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Customer Support',
          description: '24/7 phone, email, and chat customer support services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Support',
          description: 'Expert troubleshooting and technical assistance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Call Center Solutions',
          description: 'Professional inbound and outbound call center services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Help Desk Services',
          description: 'Ticket management and help desk support',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://novarosolutions.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://novarosolutions.com/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://novarosolutions.com/contact',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Novaro Solutions provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide comprehensive customer service solutions including 24/7 customer support, technical support, call center services, live chat support, help desk management, and social media customer care.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Novaro Solutions available 24/7?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide 24/7 customer support services to ensure your customers always have access to assistance whenever they need it.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly does Novaro Solutions respond?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our average response time is 10 minutes. We pride ourselves on fast, efficient customer service that keeps your customers satisfied.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Novaro Solutions integrate with my existing tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we seamlessly integrate with industry-leading tools like Zendesk, HubSpot, Salesforce, Freshdesk, and Intercom to provide unified support.',
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
