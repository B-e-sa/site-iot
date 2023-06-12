import { CSSProperties, HTMLAttributes } from "react";

const textifyString = (
    string: string,
    style?: HTMLAttributes<HTMLParagraphElement> | CSSProperties | undefined
) => {
    const splitedString = string.split('\n')

    return splitedString.map((string, index) => {

        if (index === splitedString.length - 1)
            style = undefined

        return <p style={style}>
            {string}
        </p>
    });
}

export default textifyString;