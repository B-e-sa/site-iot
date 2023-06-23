"use client"
import { IMember } from '@/types'
import { useContext } from 'react'
import TeamMemberIcon from '../components/TeamMember'
import useFetch from '../hooks/useFetch'
import { Context } from '../context/Context'

export default async function OurTeam() {
    const { language } = useContext(Context)

    const { value } = useFetch('http://localhost:3000/api/team', {
        method: 'POST',
        body: JSON.stringify({ lang: language })
    }, [language])

    if (!value) return

    return <aside className='flex justify-center items-center w-full'>
        <div className='grid grid-cols-4'>
            {(value as IMember[]).map((member) => {
                return <TeamMemberIcon
                    key={member.name}
                    {...member}
                />
            })}
        </div>
    </aside>
}