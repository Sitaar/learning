import './globals.css'

export const metadata = {
  title: 'static website',
  description: 'react for static website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
