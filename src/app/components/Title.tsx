import { ITitle } from "@/types";
import { Typography } from "@mui/material";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Title = ({ string, mb = 1, size = 32 }: ITitle) => {

    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <Typography
        variant="h3"
        fontSize={size}
        marginBottom={mb}
        color={theme === 'dark' ? "white" : "black"}
    >
        {string}
    </Typography>
}

export default Title;