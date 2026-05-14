export const metadata = {
  title: 'Renegade Retail',
  description: 'Nationwide Retail Execution Without the Chaos.',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
