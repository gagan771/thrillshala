import type React from "react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
