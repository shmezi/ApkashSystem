import {Box, Typography} from "@mui/material";

const BaseCard = ({children}: { children: React.ReactNode }) => {

    return <Box width={"25rem"} height={"10rem"}   marginTop={"1rem"} marginBottom={"1rem"}>
        {children}
    </Box>
}
export default BaseCard;