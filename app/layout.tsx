import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteDetails } from '@/lib/meta'
import Provider from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${siteDetails.title}`,
  description: `${siteDetails.description}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-[#efefef]`}>
        <Provider >
          {children}
        </Provider>
      </body>
    </html>
  )
}
