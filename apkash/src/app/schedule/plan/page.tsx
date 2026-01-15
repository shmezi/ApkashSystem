"use client"
import PlanCard from "@/components/cards/PlanCard";
import ItemsList from "@/components/selection/ItemsList";
import useWebSocket from "react-use-websocket";
import {socketUrl} from "@/variables";
import WebsocketInfo from "@/components/WebsocketInfo";
import ExcuseCard from "@/components/cards/ExcuseCard";

const Plan = () => {
    const  t = useWebSocket(socketUrl, {
        onOpen: () => {
            console.log('opened')

        },

        shouldReconnect: (closeEvent) => true,
    });


    return<>
        <WebsocketInfo hook={t}/>
        <ItemsList>
            <ExcuseCard tongue={"#03045E"} primary={"#0077B6"}/>
            <PlanCard tongue={"#03045E"} primary={"#0077B6"}/>
            <PlanCard tongue={"#03045E"} primary={"#0077B6"}/>
            <PlanCard tongue={"#03045E"} primary={"#0077B6"}/>
            <PlanCard tongue={"#03045E"} primary={"#0077B6"}/>
        </ItemsList>
    </>
}
export default Plan;