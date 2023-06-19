import { useTheme } from 'next-themes'

const isThemeDark = () => {
    const { theme } = useTheme()

    return theme === 'dark'
}

export default isThemeDark