'use client'

import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
  title: 'Wavy Hair Guide',
  description: 'Your complete guide to wavy hair care, products, and routines',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}