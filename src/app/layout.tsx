"use client"
import { IChildren } from '@/types';
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import './globals.css';
import Providers from './providers';
import WidthWarning from './components/WidthWarning';

export default function RootLayout({ children }: IChildren) {

  const { setTheme } = useTheme()
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const updateLayout = (): void => setWindowWidth(window.innerWidth);

  useEffect(() => {
    setTheme('dark')

    updateLayout()

    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [])

  return (
    <html lang="en">
      <body className='h-screen w-screen'>
        {windowWidth >= 1040
          ? <Providers>
            <Header />
            <main className='dark:bg-zinc-800 w-screen flex min-h-[90%]'>
              {children}
            </main>
            <Footer />
          </Providers>
          : <WidthWarning />
        }
      </body>
    </html >
  )
}
