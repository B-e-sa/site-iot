import WifiIcon from '@mui/icons-material/Wifi';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ThemeChanger from './ThemeButton';
import { useSelectedLayoutSegment } from 'next/navigation';

const Header = () => {

    const segment = useSelectedLayoutSegment()

    const pages = [
        'about',
        'tendencies',
        'development',
        'our-team'
    ];

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
}

export default Header