import WifiIcon from '@mui/icons-material/Wifi';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ThemeChanger from './ThemeButton';
import { useSelectedLayoutSegment } from 'next/navigation';
import LanguageButton from './LanguageButton';
import useFetch from '@/app/hooks/useFetch';
import { useContext } from 'react';
import { Context } from '@/app/context/Context';

const Header = () => {

    const { language } = useContext(Context)

    const { value } = useFetch('http://localhost:3000/api/team', {
        method: 'POST',
        body: JSON.stringify({ lang: language })
    }, [language])

    if (!value) <></>

    const segment = useSelectedLayoutSegment()

    const pages: string[][] = [
        ['about', 'sobre'],
        ['tendencies', 'tendências'],
        ['development', 'desenvolvimento'],
        ['our-team', 'nosso time']
    ]

    return <AppBar
        className="bg-black t-0 justify-center relative min-h-[10%]"
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
                {pages.map(page => (
                    <Link key={page[1]} shallow href={`/${page[0]}`}>
                        <Button
                            disableRipple
                            key={page[0]}
                        >
                            <p className={`hover:text-amber-300 ${page[0] === segment ? "text-amber-400" : "text-white"}`}>
                                {(language === 'pt' ? page[1] : page[0]).split("-").join(' ')}
                            </p>
                        </Button>
                    </Link>
                ))}
            </Box>
            <div className='flex ml-auto mr-10'>
                <ThemeChanger />
                <LanguageButton style={{ marginLeft: 10 }} />
            </div>
        </Toolbar>
    </AppBar>
}

export default Header