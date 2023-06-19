import Image, { StaticImageData } from "next/image"
import { CSSProperties, HTMLAttributes } from "react"

interface IICon {
    style?: HTMLAttributes<HTMLDivElement> | CSSProperties | undefined
    backgroundColor: string
    width: number
    src: string | StaticImageData
    alt: string
}


const CircularIcon = ({ style, backgroundColor, width, src, alt }: IICon) => {

    return (
        <div
            style={{ ...style, backgroundColor }}
            className={`${backgroundColor} mx-auto w-40 h-40 rounded-full flex justify-center items-center`}
        >
            <Image
                className="mx-auto"
                src={src}
                alt={alt}
                width={width}
            />
        </div >
    )
}

export default CircularIcon;