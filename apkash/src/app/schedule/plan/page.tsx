"use client"
import ItemsList from "@/components/selection/ItemsList";
import useWebSocket from "react-use-websocket";
import {socketUrl} from "@/variables";
import WebsocketInfo from "@/components/WebsocketInfo";

const Plan = () => {
    const t = useWebSocket(socketUrl, {
        onOpen: () => {
            console.log('opened')

        },

        shouldReconnect: (closeEvent) => true,
    });


    return <>
        <WebsocketInfo hook={t}/>
        <ItemsList>


        </ItemsList>
    </>
}
export default Plan;