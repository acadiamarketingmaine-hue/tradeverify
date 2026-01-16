import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TradeVerify | Where Skilled Trades Meet Great Employers',
  description: 'The premium hiring platform connecting verified skilled tradespeople with top employers. License verification, skills assessment, and transparent hiring.',
  keywords: 'trades hiring, skilled workers, electrician jobs, plumber jobs, HVAC jobs, construction hiring, verified workers',
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
