import { NextApiRequest, NextApiResponse } from "next";
import { bibliography } from "../../../data/data";

export default function (
    _req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send({
        bibliography
    })
}