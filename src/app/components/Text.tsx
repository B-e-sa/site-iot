import { CSSProperties, HTMLAttributes } from "react";

interface IText {
    string: string,
    style?: HTMLAttributes<HTMLParagraphElement> | CSSProperties | undefined
    mb?: number
}

const Text = ({ string: string, style, mb = 12 }: IText) => {
    const paragraphs: JSX.Element[] = []

    const splitedString = string.split('\n')

    splitedString.forEach((element, index) => {
        const isLastItem = index === splitedString.length - 1

        if (isLastItem) style = undefined

        paragraphs.push(
            <p style={{ ...style, marginBottom: mb, textAlign: "justify" }}>
                {element}
            </p>
        )
    });

    const textElement = <div>
        {paragraphs.map((item) => item)}
    </div>

    return textElement;
}

export default Text;