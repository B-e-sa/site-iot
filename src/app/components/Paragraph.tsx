import { IChildren } from "@/types";
import { Typography } from "@mui/material";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Paragraph = ({ children }: IChildren) => {

    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Typography fontSize={12} className={theme === 'dark' ? "text-white" : "text-black"}>
            {children}
        </Typography>
    )
}

export default Paragraph