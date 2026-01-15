"use client"
import {Box, Button, Typography} from "@mui/material";
import useWebSocket, {ReadyState} from "react-use-websocket";
import WebsocketInfo from "@/components/WebsocketInfo";
import {socketUrl} from "@/variables";


const SchedulePage = () => {

    const socket = useWebSocket(socketUrl, {
        onOpen: () => {
            console.log('opened')

        },

        shouldReconnect: (closeEvent) => true,
    });


    return <>

        <WebsocketInfo hook={socket}/>
        <Box>
            <Typography variant={"h2"}>Schedule:</Typography>

            <Button variant={"outlined"} onClick={() => {

            }}>Build</Button>
        </Box>
    </>
}
export default SchedulePage;