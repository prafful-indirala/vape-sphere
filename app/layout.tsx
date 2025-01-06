import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { CartCounter } from '@/components/cart-counter'

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
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">VapeSphere</Link>
            <Link href="/cart" className="flex items-center">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <CartCounter />
            </Link>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

