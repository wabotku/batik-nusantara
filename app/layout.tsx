import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Batik Nusantara',
  description: 'Batik Nusantara adalah usaha yang bergerak dalam bidang fashion terutama dalam penyediaan bahan batik, tenun dan butik, baik dalam skala kecil maupun dalam partai besar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
