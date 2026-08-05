import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/auth-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BMTC SmartTicket - Digital Bus Ticketing',
  description: 'Buy digital bus tickets for Bangalore BMTC with QR codes, instant payments, and real-time updates.',
  keywords: 'BMTC, bus ticket, Bangalore, QR code, digital ticket, public transport',
  authors: [{ name: 'BMTC SmartTicket Team' }],
  creator: 'BMTC SmartTicket',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bmtcsmartticket.com',
    title: 'BMTC SmartTicket - Digital Bus Ticketing',
    description: 'Buy digital bus tickets for Bangalore BMTC with QR codes, instant payments, and real-time updates.',
    siteName: 'BMTC SmartTicket',
    images: [
      {
        url: 'https://bmtcsmartticket.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BMTC SmartTicket - Digital Bus Ticketing System',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'BMTC SmartTicket - Digital Bus Ticketing',
    description: 'Buy digital bus tickets for Bangalore BMTC',
    images: ['https://bmtcsmartticket.com/og-image.png'],
  },
  
  // Other metadata
  robots: 'index, follow',
  alternates: {
    canonical: 'https://bmtcsmartticket.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1e3a8a" />
        
        {/* Additional meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
      </head>
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
