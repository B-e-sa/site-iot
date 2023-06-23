import { NextApiRequest, NextApiResponse } from "next";
import { tendencies } from "../../data/data";
import sendDesiredDataLanguage from "../../utils/sendDesiredDataLanguage";

export default function (
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(
        sendDesiredDataLanguage(req, res, tendencies)
    )
}