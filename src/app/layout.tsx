"use client"
import { IChildren } from '@/types';
import { ThemeProvider } from 'next-themes';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import './globals.css';
import Providers from './providers';
import { useEffect } from "react"
import { useTheme } from 'next-themes';

export default function RootLayout({ children }: IChildren) {

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <html lang="en">
      <body className='h-screen w-screen'>
        <Providers>
          <Header />
          <main className='dark:bg-zinc-800 w-screen flex min-h-[90%]'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
