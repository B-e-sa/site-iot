import { CSSProperties, HTMLAttributes } from "react";

interface IText {
    string: string,
    style?: HTMLAttributes<HTMLParagraphElement> | CSSProperties | undefined
}

const Text = ({ string: string, style }: IText) => {
    const paragraphs: JSX.Element[] = []

    const splitedString = string.split('\n')

    splitedString.forEach((element, index) => {
        if (index === splitedString.length - 1) style = undefined

        paragraphs.push(
            <p style={style}>
                {element}
            </p>
        )
    });

    const textElement = <>
        {paragraphs.map((item) => item)}
    </>

    return textElement;
}

export default Text;