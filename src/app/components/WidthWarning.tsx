import { Typography, Box } from "@mui/material";

const WidthWarning = () => {
    return <Box className="w-screen h-screen flex justify-center items-center">
        <div className="w-52">
            <Typography className="text-gray-500" fontSize={40}>
                Dear user,
            </Typography>
            <Typography className="text-justify">
                our main focus on this website was not the responsiveness of the interfaces,
                so please use this site on desktop devices with a minimum width of 1040px.
            </Typography>
        </div>
    </Box>
}

export default WidthWarning