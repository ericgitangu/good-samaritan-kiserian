// app/layout.tsx
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '../components/shared/Navbar'
import { Footer } from '../components/shared/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Good Samaritan Church, Kiserian',
  description: 'Welcome to our online community!',
  openGraph: {
    title: 'Good Samaritan Church, Kiserian',
    description: 'Welcome to our online community!',
    url: 'https://www.example.com', // Replace with your actual URL
    siteName: 'Good Samaritan Church, Kiserian',
    images: [
      {
        url: '/public/images/church.jpeg', // Replace with your OG image path
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}