import './globals.css'

import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { QueryProvider } from '@/providers/query-provider'

export const metadata: Metadata = {
  title: 'Captação | SpotForm',
  description: 'Pagina de captação de leads',
  metadataBase: new URL('https://www.captacao2.spotform.com.br'),
  alternates: {
    canonical: './',
  },
  other: {
    'facebook-domain-verification': '6jw96kz1oi3376orw13h3d39lmp0ue',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const sora = Sora({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={sora.className}>
      <body className="flex size-full min-h-dvh flex-col overflow-x-hidden antialiased">
        <QueryProvider>
          <Toaster richColors closeButton position="top-center" />

          {/* This will be rendered only on the client side */}
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
