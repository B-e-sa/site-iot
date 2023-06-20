import { useTheme } from 'next-themes'

const isThemeDark = (): boolean => {
    const { theme } = useTheme()

    return theme === 'dark'
}

export default isThemeDark