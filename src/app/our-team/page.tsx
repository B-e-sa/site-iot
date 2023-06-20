"use client"
import { Typography } from '@mui/material'
import Image from 'next/image'
import bibliography from '../../utils/bibliography.json'
import team from '../../utils/team_members.json'

export default function OurTeam() {
    const sortedTeam = team.sort((currentMember, nextMember) => {
        const nameA = currentMember.name.toLowerCase()
        const nameB = nextMember.name.toLowerCase()

        if (nameA < nameB) return -1

        else if (nameA > nameB) return 1

        return 0
    })

    return <aside className='flex justify-center items-center w-full'>
        <div className='grid grid-cols-4'>
            {sortedTeam.map(({ name, image, course }) => {
                return <div className='mx-10 flex flex-col items-center' >
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
            })}
        </div>
    </aside>
}