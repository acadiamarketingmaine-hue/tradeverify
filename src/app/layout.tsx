import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TradeVerify | Where Skilled Trades Meet Great Employers',
  description: 'The premium hiring platform connecting verified skilled tradespeople with top employers. License verification, skills assessment, and transparent hiring.',
  keywords: 'trades hiring, skilled workers, electrician jobs, plumber jobs, HVAC jobs, construction hiring, verified workers',
  metadataBase: new URL('https://tradeverify.vercel.app'),
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'TradeVerify | Where Skilled Trades Meet Great Employers',
    description: 'The premium hiring platform connecting verified skilled tradespeople with top employers. 23% higher pay. 47% longer retention. 100% verified.',
    url: 'https://tradeverify.vercel.app',
    siteName: 'TradeVerify',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeVerify | Where Skilled Trades Meet Great Employers',
    description: 'The premium hiring platform connecting verified skilled tradespeople with top employers. 23% higher pay. 47% longer retention. 100% verified.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
