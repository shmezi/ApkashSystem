"use client"
import {Box, Typography} from "@mui/material";
import {WebSocketHook} from "react-use-websocket/src/lib/types";
import {ReadyState} from "react-use-websocket/src";
import {useEffect, useState} from "react";


const WebsocketInfo = ({hook}: { hook: WebSocketHook }) => {

    let [statusColor, setStatusColor] = useState("red")
    useEffect(() => {
        switch (hook.readyState) {
            case ReadyState.OPEN:
                setStatusColor("green")
                break
            case ReadyState.CONNECTING:
                setStatusColor("yellow")
                break
            default:
                setStatusColor("red")
        }
    })


    return <Box width={"8rem"} margin={"1rem"} padding={"1rem"} height={"2rem"} border={"0.1rem solid black"}
                borderRadius={"0.4rem"} display={"flex"}
                alignItems={"center"} justifyContent={"center"}>


        <Typography variant={"h6"}>תקשורת: </Typography>
        <Box width={"1rem"} height={"1rem"} borderRadius={"100%"}
             bgcolor={statusColor}/>
    </Box>

}
export default WebsocketInfo