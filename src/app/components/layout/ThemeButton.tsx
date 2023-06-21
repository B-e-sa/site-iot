import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
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

    return <div className='ml-auto mr-10'>
        <WbSunnyOutlinedIcon onClick={handleTheme} className='cursor-pointer' />
    </div>
}

export default ThemeChanger