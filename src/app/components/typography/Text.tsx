import { IText } from "@/types";

import { Typography } from "@mui/material";

const Text = ({ string, style, mb = 2 }: IText) => {
    const paragraphs: JSX.Element[] = []

    const splitedString = string.split('\n')

    splitedString.forEach((element, index) => {
        paragraphs.push(
            <Typography
                marginBottom={mb}
                textAlign="justify"
                key={element}
                style={style}
            >
                {element}
            </Typography >
        )
    });

    const textElement = <div className={`dark:text-white text-black`}>
        {paragraphs.map(item => item)}
    </div>

    return textElement;
}

export default Text;