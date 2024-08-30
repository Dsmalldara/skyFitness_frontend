import Footer from "./SharedComponents/Footer";
import Header from "./SharedComponents/Header";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`font-sans ${inter.className}`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
