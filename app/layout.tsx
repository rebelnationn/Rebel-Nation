import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart'
import { Navbar } from '@/components/navbar'
import { SlideCart } from '@/components/slide-cart'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Rebel Nation | Premium Streetwear',
  description: 'La nueva generación del streetwear. Ropa urbana premium para aquellos que desafían lo convencional.',
  keywords: ['streetwear', 'ropa urbana', 'moda', 'premium', 'rebel nation'],
  openGraph: {
    title: 'Rebel Nation | Premium Streetwear',
    description: 'La nueva generación del streetwear. Ropa urbana premium para aquellos que desafían lo convencional.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <Navbar />
          <SlideCart />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
