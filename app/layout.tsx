import "./globals.css"
import type React from "react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Samuel Oyerinde — AI & Software Engineer",
  description:
    "Portfolio of Samuel Oyerinde, an AI Research Engineer specialising in multilingual speech technologies, NLP, low-resource African language data infrastructure, and scalable production platforms.",
  keywords: [
    "Samuel Oyerinde",
    "AI Engineer",
    "NLP",
    "Speech Technology",
    "Low-Resource Languages",
    "African NLP",
    "Masakhane",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}