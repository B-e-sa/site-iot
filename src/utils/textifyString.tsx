import { CSSProperties, HTMLAttributes } from "react";

const textifyString = (
    string: string,
    style?: HTMLAttributes<HTMLParagraphElement> | CSSProperties | undefined
) => {
    const splitedString = string.split('\n')

    return splitedString.map((string, index) => {

        const isLastItem = index === splitedString.length - 1

        if (isLastItem) style = undefined

        return <p style={style}>
            {string}
        </p>
    });
}

export default textifyString;