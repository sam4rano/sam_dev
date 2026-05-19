import "./globals.css"
import type React from "react"

export const metadata = {
  title: "Samuel Oyerinde — AI & Software Engineer",
  description:
    "Portfolio of Samuel Oyerinde, an AI and Software Engineer specialising in multilingual speech technologies, NLP, data infrastructure, and scalable platforms for low-resource environments.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}