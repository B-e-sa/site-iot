import { IICon } from "@/types";
import Image from "next/image";

const CircularIcon = ({
    style,
    backgroundColor,
    width,
    src,
    alt
}: IICon) => {

    return (
        <div
            style={{ ...style, backgroundColor }}
            className={`${backgroundColor} mx-auto w-40 h-40 rounded-full flex justify-center items-center`}
        >
            <Image
                className="mx-auto rounded-full object-cover"
                src={src}
                alt={alt}
                width={width}
                height={width}
            />
        </div >
    )
}

export default CircularIcon;