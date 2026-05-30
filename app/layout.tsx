import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adors.dev'),

  title: {
    default:
      "Álvaro d'Ors | Quantitative Finance, Computer Engineering & Software Development",
    template: "%s | Álvaro d'Ors",
  },

  description:
    "Álvaro d'Ors is a Computer Engineering student focused on quantitative finance, algorithmic trading, machine learning, mathematics, and software engineering. Explore projects, research, and technical articles.",

  keywords: [
    "Álvaro d'Ors",
    "Alvaro d Ors",
    "Alvaro Ors",

    // Personal brand
    "Quant Developer",
    "Quantitative Developer",
    "Quantitative Finance",
    "Quantitative Research",
    "Quantitative Analyst",
    "Algorithmic Trading",
    "Systematic Trading",

    // Technical skills
    "Computer Engineering",
    "Software Engineering",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Statistics",
    "Probability",
    "Mathematics",
    "Numerical Methods",
    "Optimization",

    // Programming
    "Python",
    "C++",
    "TypeScript",
    "Next.js",
    "React",

    // Finance
    "Financial Engineering",
    "Financial Modeling",
    "Portfolio Optimization",
    "Risk Modeling",
    "Quant Trading",
    "High Frequency Trading",

    // Education
    "UNIR",
    "Computer Engineering Student",
  ],
  authors: [
    {
      name: "Álvaro d'Ors",
      url: 'https://adors.dev',
    },
  ],

  creator: "Álvaro d'Ors",
  publisher: "Álvaro d'Ors",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: 'https://adors.dev',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adors.dev',
    siteName: 'adors.dev',
    title:
      'Álvaro d\'Ors | Quantitative Finance, Computer Engineering & Software Development',
    description:
      'Computer Engineering student interested in quantitative finance, machine learning, algorithmic trading, mathematics, and software engineering.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: "Álvaro d'Ors Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Álvaro d'Ors | Computer Engineering Student & Developer",
    description:
      'Computer Engineering student at UNIR building software, web applications, and engineering projects.',
    images: ['/og.png'],
  },

  category: 'Technology',

  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mono.variable}>
      <body>{children}</body>
    </html>
  )
}