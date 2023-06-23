"use client"
import { IMember } from '@/types'
import { useContext } from 'react'
import team from '../../utils/team.json'
import TeamMemberIcon from '../components/TeamMember'
import { Context } from '../context/Context'

export default async function OurTeam() {
    const { language } = useContext(Context)

    return <aside className='flex justify-center items-center w-full'>
        <div className='grid grid-cols-4'>
            {((team as any)[language] as IMember[]).map((member) => {
                return <TeamMemberIcon
                    key={member.name}
                    {...member}
                />
            })}
        </div>
    </aside>
}