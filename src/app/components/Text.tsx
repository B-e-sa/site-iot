import { IText } from "@/types";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Text = ({ string: string, style, mb = 12 }: IText) => {

    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

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

    const textElement = <div style={{ color: theme === 'dark' ? "white" : "black" }}>
        {paragraphs.map(item => item)}
    </div>

    return textElement;
}

export default Text;