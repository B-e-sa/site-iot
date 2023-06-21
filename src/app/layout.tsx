"use client"
import { IChildren } from '@/types';
import { ThemeProvider } from 'next-themes';
import Header from './components/layout/Header';
import './globals.css';
import Footer from './components/layout/Footer';

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body className='h-screen w-screen'>
        <ThemeProvider>
          <Header />
          <main className='w-screen flex min-h-[90%]'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html >
  )
}
