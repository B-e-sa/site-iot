"use client"
import Image from 'next/image'
import bibliography from '../../utils/bibliography.json'
import team from '../../utils/team_members.json'
import { Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState, useRef } from 'react'

export default function OurTeam() {

    const white = ' fill-white';
    const zinc = ' fill-zinc-500';

    const [leftArrowSettings, setLeftArrowSettings] = useState(zinc);
    const [rightArrowSettings, setRightArrowSettings] = useState(white);

    const teamContainer = useRef<HTMLDivElement>(null);

    const handleClick = (action: "right" | "left"): void => {
        const container = teamContainer.current!

        const containerScrollWidth = container.scrollWidth

        const containerClientWidth = container.clientWidth

        const scrollMaxWidth = containerScrollWidth - containerClientWidth

        const clickScrollValue = 450

        const maxScrollValue = scrollMaxWidth - clickScrollValue

        if (action === 'right') {

            container.scrollLeft -= clickScrollValue

            setRightArrowSettings(white)

            console.log(
                "Current: " + container.scrollLeft,
                "\nMax Scroll Value: " + (scrollMaxWidth - clickScrollValue),
                "\nMax Scroll Width: " + scrollMaxWidth,
                "Calc: " + (scrollMaxWidth - clickScrollValue),
                "Checks: " + "max -> " + container.scrollLeft > maxScrollValue + "min -> " + (container.scrollLeft < maxScrollValue)
            )

            if (
                container.scrollLeft === clickScrollValue
                || container.scrollLeft < maxScrollValue
            )
                setLeftArrowSettings(zinc);

        } else {

            container.scrollLeft += clickScrollValue

            setLeftArrowSettings(white)

            if (container.scrollLeft == maxScrollValue || container.scrollLeft > maxScrollValue)
                setRightArrowSettings(zinc)

        }
    };

    const sortedTeam = team.sort((currentMember, nextMember) => {
        const nameA = currentMember.name.toLowerCase()
        const nameB = nextMember.name.toLowerCase()

        if (nameA < nameB) return -1

        else if (nameA > nameB) return 1

        return 0
    })

    return <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full px-10 flex justify-between'>
            <ArrowBackIcon onClick={() => handleClick('right')} className={'w-12 h-12' + leftArrowSettings} />
            <ArrowForwardIcon onClick={() => handleClick('left')} className={'w-12 h-12' + rightArrowSettings} />
        </div>
        <div ref={teamContainer} className='w-full flex overflow-x-hidden'>
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
                    >
                        {course}
                    </Typography>
                </div>
            })}
        </div>
        <div className='w-fit'>
            <p>SITE BIBLIOGRAPHY</p>
            {bibliography.map(({ name, link }) => {
                return <ul>
                    <a target='_blank' href={link}>
                        <li className='w-fit'>
                            {name}
                        </li>
                    </a>
                </ul>
            })}
        </div>
    </div>
}