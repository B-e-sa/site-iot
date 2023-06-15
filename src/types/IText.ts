import { CSSProperties, HTMLAttributes } from "react"

export interface IText {
    string: string,
    style?: HTMLAttributes<HTMLParagraphElement> | CSSProperties | undefined
    mb?: number
}