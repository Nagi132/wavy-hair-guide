import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wavy Hair Guide',
  description: 'Your complete guide to wavy hair care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}