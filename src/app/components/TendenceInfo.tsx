import { Typography } from '@mui/material';
import Link from 'next/link';
import circles from '../../utils/circles.json';
import Image from 'next/image';
import arrow from '../../../public/general-icons/arrow.svg'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const TendencieInfo = ({ tendenceId }: { tendenceId: number }) => {

    const clickedCircle = circles.find(tendence => {
        return tendence.id === tendenceId
    })

    return (
        <div className='w-3/5'>
            <div>
                <Typography
                    variant="h3"
                    fontFamily='monospace'
                    className={`mb-3 ${roboto.className}`}
                >
                    {clickedCircle?.textContex.title}
                </Typography>
                <Typography
                    className={`${roboto.className} text-justify w-4/5`}
                    fontFamily='monospace'
                    sx={{
                        mr: 2,
                        mb: 1,
                        fontSize: 17.5
                    }}
                >
                    {clickedCircle?.textContex.content}
                </Typography>
            </div>
            <Link href='#' className='flex'>
                <Typography
                    sx={{
                        fontWeight: 1000,
                        fontFamily: 'monospace',
                    }}
                >
                    See more about it
                </Typography>
                <Image
                    className='ml-2'
                    alt='right arrow'
                    src={arrow}
                    width={25}
                    height={25}
                />
            </Link>
        </div>
    )
}

export default TendencieInfo;