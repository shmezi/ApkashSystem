import {Box, Typography} from "@mui/material";
import useWebSocket, {ReadyState} from "react-use-websocket";
import {WebSocketHook} from "react-use-websocket/src/lib/types";


const WebsocketInfo = ({hook}: { hook: WebSocketHook }) => {


    return <Box width={"8rem"} margin={"1rem"} padding={"1rem"} height={"2rem"} border={"0.1rem solid black"} borderRadius={"0.4rem"} display={"flex"}
                alignItems={"center"} justifyContent={"center"}>


        <Typography variant={"h6"}>סטטוס: </Typography>
        <Box width={"1rem"} height={"1rem"} borderRadius={"100%"}
             bgcolor={hook.readyState == ReadyState.OPEN ? "green" : "red"}/>
    </Box>

}
export default WebsocketInfo