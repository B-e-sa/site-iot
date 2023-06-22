import { IChildren } from "@/types";
import { Typography } from "@mui/material";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Paragraph = ({ children }: IChildren) => {
    return (
        <Typography fontSize={12} className='dark:text-white text-black'>
            {children}
        </Typography>
    )
}

export default Paragraph