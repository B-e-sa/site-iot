import { ITitle } from "@/types";
import { Typography } from "@mui/material";

const Title = ({ string, mb = 1, size = 32 }: ITitle) => {
    return <Typography
        variant="h3"
        fontSize={size}
        marginBottom={mb}
    >
        {string}
    </Typography>
}

export default Title;