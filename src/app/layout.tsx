import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next Chat',
  description: 'A chat application built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
