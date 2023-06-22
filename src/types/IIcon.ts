import { StaticImageData } from "next/image"
import { CSSProperties, HTMLAttributes } from "react"

export interface IICon {
    style?: HTMLAttributes<HTMLDivElement> | CSSProperties | undefined
    backgroundColor: string
    width: number
    src: string | StaticImageData
    alt: string
}