import './globals.css'

import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

import { CrispChat } from '@/components/crisp'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Captação | SpotForm',
  description: 'Pagina de captação de leads',
  metadataBase: new URL('https://captacao2.spotform.com.br'),
  alternates: {
    canonical: './',
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
      <CrispChat />
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID!} />
      )}

      {process.env.GOOGLE_TAG_MANAGER_ID && (
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID!} />
      )}

      <body className="antialiased min-h-dvh flex flex-col size-full overflow-x-hidden">
        {children}
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  )
}
