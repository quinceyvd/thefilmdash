import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'TFD',
  description: 'A tool for turning your film/TV review into a social media presentation.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <div className='bg-neutral-950 h-full font-inter text-white accent-rose-600'>
          {children}
        </div>
      </body>
    </html>
  )
}
