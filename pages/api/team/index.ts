import { NextApiRequest, NextApiResponse } from "next";
import { team } from "../../../data/data";
import { IMember } from "@/types";
import returnLowercased from "@/utils/setAllToLowercase";

export default function (
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (!req.body) return res.status(200).send({
        message: "lang not provided"
    })

    const lang = req.body.lang

    const sortedTeam: IMember[] = (team as any)[lang].sort((
        currentMember: IMember,
        nextMember: IMember
    ) => {
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

    console.log(sortedTeam)

    res.status(200).send(sortedTeam)
}