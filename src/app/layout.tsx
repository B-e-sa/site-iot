"use client"
import { IChildren } from '@/types';
import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import './globals.css';
import Footer from './components/Footer';

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
