import { ITitle } from "@/types";
import { Typography } from "@mui/material";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Title = ({ string, mb = 1, size = 32 }: ITitle) => {
    return <Typography
        variant="h3"
        fontSize={size}
        marginBottom={mb}
        className="dark:text-white text-black"
    >
        {string}
    </Typography>
}

export default Title;