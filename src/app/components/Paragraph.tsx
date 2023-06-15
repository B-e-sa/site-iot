import { IChildren } from "@/types";
import { Typography } from "@mui/material";

const Paragraph = ({ children }: IChildren) => {
    return <Typography
        fontSize={12}
    >
        {children}
    </Typography>
}

export default Paragraph