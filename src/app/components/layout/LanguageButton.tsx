import { Context } from "@/app/context/Context";
import { Typography } from "@mui/material";
import { CSSProperties, HTMLAttributes, useContext } from "react";

const LanguageButton = ({ style }: { style?: HTMLAttributes<HTMLDivElement> | CSSProperties | undefined }) => {
    const { language, setLanguage } = useContext(Context)

    const handleLanguage = () => {
        language === 'en'
            ? setLanguage('pt')
            : setLanguage('en')
    }

    return <Typography
        style={style}
        className="cursor-pointer 
        text-white"
        onClick={handleLanguage}
    >
        {language.toUpperCase()}
    </Typography>
}

export default LanguageButton