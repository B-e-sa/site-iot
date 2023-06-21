"use client"
import { IMember } from '@/types'
import team from '../../utils/team_members.json'
import TeamMemberIcon from '../components/TeamMember'
import returnLowercased from '@/utils/setAllToLowercase'

export default function OurTeam() {

    const sortedTeam: IMember[] = team.sort((currentMember, nextMember) => {

        const [
            nameA,
            nameB,
            courseA,
            courseB
        ] = returnLowercased([
            currentMember.name,
            nextMember.name,
            currentMember.course,
            nextMember.course
        ])

        if (courseA < courseB || nameA < nameB)
            return -1

        if (courseA > courseB || nameA > nameB)
            return 1

        return 0

    })

    return <aside className='flex justify-center items-center w-full'>
        <div className='grid grid-cols-4'>
            {sortedTeam.map((member) => <TeamMemberIcon {...member} />)}
        </div>
    </aside>
}