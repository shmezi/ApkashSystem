"use client"
import {Box, Button, Typography} from "@mui/material";
import React from "react";

const CardsHolder = ({children}: { children?: React.ReactNode }) => {

    return <Box
        height={"95%"}
        alignItems="center"

        display="flex"
        flexDirection="column"

    >
        <Typography variant={"h2"}>
            ש״ג
        </Typography>
        <Box

            alignItems="center"
            overflow={"clip"}
            display="flex"
            flexDirection="column"

            margin={"3rem"}
            marginTop={"0"}
            width={"28rem"}
            height={"90%"}
            borderRadius={"1rem"}
            border={"black solid 3px"}>
            <Box className={"ItemListChildren"}   height={"90%"} overflow={"auto"}>
                {children}
            </Box>

            <Button

                fullWidth sx={{bgcolor: "grey", borderTopLeftRadius: "0", borderTopRightRadius: "0"}}>
                <Typography variant={"h3"}>+</Typography>
            </Button>
        </Box>


    </Box>
}
export default CardsHolder;