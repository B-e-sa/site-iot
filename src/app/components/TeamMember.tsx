import { Typography } from '@mui/material'
import Image from 'next/image'

const TeamMemberIcon = ({ name, image, course }: {
    name: string;
    image: string;
    course: string;
}) => {
    return <div className="mx-10 flex flex-col items-center">
        <Image
            alt=""
            width={208}
            height={208}
            src={image}
            unoptimized
            className='min-w-[13rem] min-h-[13rem] object-cover w-52 h-52 rounded-full'
        />
        <Typography
            variant='h2'
            fontSize={25}
        >
            {name}
        </Typography>
        <Typography
            fontSize={course.length >= 27 ? 12.8 : 15}
            color="gray"
            className='mb-10'
        >
            {course}
        </Typography>
    </div>
}

export default TeamMemberIcon

