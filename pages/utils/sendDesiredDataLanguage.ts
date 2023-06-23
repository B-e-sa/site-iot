import { NextApiRequest, NextApiResponse } from "next";

const sendDesiredDataLanguage = (
    request: NextApiRequest,
    response: NextApiResponse,
    page: any,
) => {
    const { body } = request

    if (!body)
        return response.status(400).send({
            message: "lang not provided"
        })

    const lang: string = body.lang;

    const data: {} = page[lang];

    return data;
}

export default sendDesiredDataLanguage