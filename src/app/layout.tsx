"use client"
import WifiIcon from '@mui/icons-material/Wifi';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import ThemeChanger from './components/ThemeButton';
import './globals.css';

interface IChildren {
  children: React.ReactNode
}

export default function RootLayout({ children }: IChildren) {

  const [pageLoaded, setPageLoaded] = useState(false)

  const segment = useSelectedLayoutSegment()

  const pages = [
    'about',
    'tendencies',
    'development',
    'our-team'
  ];

  return (
    <html lang="en">
      <body className='h-screen w-screen'>
        <ThemeProvider>
          <AppBar
            className="bg-black t-0 h-1/10 justify-center relative"
            position='relative'
            style={{ backgroundColor: 'black' }}
          >
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                marginRight={2}
                fontFamily='monospace'
                fontWeight={700}
                letterSpacing='.3rem'
              >

                <Link className={`hover:text-amber-300 ${!segment ? "text-amber-400" : ""}`} style={{ marginLeft: 25 }} shallow href="/">
                  <span>I</span>
                  <WifiIcon sx={{ marginBottom: .5 }} />
                  <span className='ml-1'>T</span>
                </Link>
              </Typography>
              <Box className='flex'>
                {pages.map((page) => (
                  <Link shallow href={`/${page}`}>
                    <Button
                      disableRipple
                      key={page}
                    >
                      <p className={`hover:text-amber-300 ${page === segment ? "text-amber-400" : "text-white"}`}>
                        {page.split("-").join(' ')}
                      </p>
                    </Button>
                  </Link>
                ))}
              </Box>
              <ThemeChanger />
            </Toolbar>
          </AppBar>
          {pageLoaded
            ? <p>TESTE</p>
            : <main className='h-9/10 flex'>
              {children}
            </main>
          }
        </ThemeProvider>
      </body>
    </html >
  )
}
