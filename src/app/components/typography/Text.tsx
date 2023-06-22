import { IText } from "@/types";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import isThemeDark from "@/utils/isThemeDark";

const Text = ({ string: string, style, mb = 12 }: IText) => {
    const paragraphs: JSX.Element[] = []

    const splitedString = string.split('\n')

    splitedString.forEach((element, index) => {
        const isLastItem = index === splitedString.length - 1

        if (isLastItem) style = undefined

        paragraphs.push(
            <p key={element} style={{ ...style, marginBottom: mb, textAlign: "justify" }}>
                {element}
            </p>
        )
    });

    const textElement = <div className={`dark:text-white text-black`}>
        {paragraphs.map(item => item)}
    </div>

    return textElement;
}

export default Text;