'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import ContextProvider from './context/Context'

const Providers = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider attribute='class'>
        <ContextProvider>
            {children}
        </ContextProvider>
    </ThemeProvider>
}

export default Providers