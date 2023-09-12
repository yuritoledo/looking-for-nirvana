import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
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
        <nav className="flex justify-between items-center px-5 py-3 bg-blue-600">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-300">Looking for</span>{" "}
            <span className="text-white">Nirvana</span>
          </h1>
        </nav>
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  )
}
