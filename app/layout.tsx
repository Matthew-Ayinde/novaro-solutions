import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import StructuredData from "@/components/shared/StructuredData";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://novarosolutions.com'),
  title: {
    default: 'Novaro Solutions - Professional Customer Service & Support Solutions',
    template: '%s | Novaro Solutions'
  },
  description: 'Transform your customer experience with Novaro Solutions. We provide 24/7 professional customer service, technical support, and call center solutions. Trusted by growing businesses worldwide.',
  keywords: [
    'customer service',
    'call center solutions',
    'customer support outsourcing',
    'technical support',
    'live chat support',
    '24/7 customer service',
    'help desk services',
    'BPO services',
    'customer care',
    'contact center solutions',
    'customer experience management',
    'omnichannel support'
  ],
  authors: [{ name: 'Novaro Solutions' }],
  creator: 'Novaro Solutions',
  publisher: 'Novaro Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novarosolutions.com',
    title: 'Novaro Solutions - Professional Customer Service & Support Solutions',
    description: 'Transform your customer experience with 24/7 professional customer service and support solutions. We are the extension of your team.',
    siteName: 'Novaro Solutions',
    images: [
      {
        url: 'https://res.cloudinary.com/matthew-ayinde/image/upload/v1765277527/logo_ztqc4e.jpg',
        width: 1200,
        height: 630,
        alt: 'Novaro Solutions - Customer Service Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novaro Solutions - Professional Customer Service Solutions',
    description: '24/7 customer service and support solutions for growing businesses. Technical support, live chat, and call center services.',
    images: ['https://res.cloudinary.com/matthew-ayinde/image/upload/v1765277527/logo_ztqc4e.jpg'],
    creator: '@novarosolutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://novarosolutions.com',
  },
  category: 'Business Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
