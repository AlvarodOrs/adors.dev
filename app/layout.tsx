import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: "Álvaro d'Ors — adors.dev",
  description: 'Computer Engineering Student · UNIR',
  metadataBase: new URL('https://adors.dev'),
  openGraph: {
    title: "Álvaro d'Ors",
    description: 'Computer Engineering Student · UNIR',
    url: 'https://adors.dev',
    siteName: 'adors.dev',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>{children}</body>
    </html>
  )
}
