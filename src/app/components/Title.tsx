import { Typography } from "@mui/material";

const Title = ({ string }: { string: string }) => {
    return <Typography
        variant="h3"
        fontSize={30}
    >
        {string}
    </Typography>
}

export default Title;