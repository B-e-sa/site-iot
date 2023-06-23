import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeChanger = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => { setMounted(true) }, [])

    if (!mounted) return null

    const handleTheme = () => {
        theme === 'dark'
            ? setTheme('light')
            : setTheme('dark')
    }

    const Icon = theme === 'dark' ? LightModeOutlinedIcon : DarkModeOutlinedIcon

    return <Icon onClick={handleTheme} className='cursor-pointer' />

}

export default ThemeChanger