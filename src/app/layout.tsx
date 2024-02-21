import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
console.log(inter)

export const metadata: Metadata = {
  title: 'TeslaBank',
  description: 'Banco 100% digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={twMerge(inter.variable, 'font-sans')}>{children}</body>
    </html>
  )
}
