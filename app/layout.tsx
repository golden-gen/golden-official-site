import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar/Navbar'
import { Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golden Generation',
  description: 'Golden Generation Community Development Club Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
