
import Providers from "./Provider/Provider";
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
import 'react-toastify/dist/ReactToastify.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`font-sans ${inter.className}`}>
      <Providers>
        <Header/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  )
}
