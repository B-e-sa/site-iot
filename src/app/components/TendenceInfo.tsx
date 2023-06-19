import { Typography } from '@mui/material';
import Link from 'next/link';
import circles from '../../utils/circles.json';
import Image from 'next/image';
import arrow from '../../../public/general-icons/arrow.svg'
import { Roboto } from 'next/font/google';
import { ICirlce } from '@/types';
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import isThemeDark from '@/utils/isThemeDark';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const TendencieInfo = ({ tendenceId }: { tendenceId: number }) => {

    const clickedCircle: ICirlce = circles.find(tendence => {
        return tendence.id === tendenceId
    })!

    const { textContex, } = clickedCircle

    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className='w-3/5 ml-10 -mr-24'>
            <div>
                <Typography
                    variant="h3"
                    fontFamily='monospace'
                    className={`mb-3 ${roboto.className}`}
                >
                    {textContex.title}
                </Typography>
                <Typography
                    className={`text-justify w-4/5 mb-5`}
                    fontSize={17.5}
                >
                    {textContex.content}
                </Typography>
            </div>
            <Link href={textContex.pageLink} className='flex'>
                {textContex.pageLink !== "" &&
                    <>
                        <Typography
                            fontWeight={1000}
                            fontFamily='monospace'
                        >
                            See more about it
                        </Typography>
                        <Image
                            className={`ml-2 ${isThemeDark() ? 'invert' : ''}`}
                            alt='right arrow'
                            src={arrow}
                            width={25}
                            height={25}
                        />
                    </>
                }
            </Link>
        </div >
    )
}

export default TendencieInfo;