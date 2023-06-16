import { IChildren } from "@/types";
import { Typography } from "@mui/material";

const Paragraph = ({ children }: IChildren) => {

    return (
        <Typography fontSize={12} style={{ color: false ? "white" : "black" }}>
            {children}
        </Typography>
    )
}

export default Paragraph