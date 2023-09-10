import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./store/provider"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Looking for Nirvana",
  description: "Address search",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
