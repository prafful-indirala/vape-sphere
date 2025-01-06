import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { CartCounter } from '@/components/cart-counter'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VapeSphere - Premium Vape Products',
  description: 'Wholesale vape products for retailers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="bg-secondary/50 backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold gradient-text">VapeSphere</Link>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <Link href="/cart" className="flex items-center">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                  <CartCounter />
                </Link>
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

