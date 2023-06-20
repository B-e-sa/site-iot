"use client"
import team from '../../utils/team_members.json'
import TeamMemberIcon from '../components/TeamMember'

export default function OurTeam() {
    const sortedTeam = team.sort((currentMember, nextMember) => {

        const nameA = currentMember.name.toLowerCase()
        const nameB = nextMember.name.toLowerCase()

        const courseA = currentMember.course.toLowerCase()
        const courseB = nextMember.course.toLowerCase()

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