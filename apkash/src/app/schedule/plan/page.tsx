"use client"
import CardsHolder from "@/components/selection/CardsHolder";
import useWebSocket from "react-use-websocket";
import {socketUrl} from "@/variables";
import WebsocketInfo from "@/components/WebsocketInfo";
import RollerSelector from "@/components/selection/RollerSelector";
import ScheduleCard from "@/components/cards/ScheduleCard";
import ExemptionCard from "@/components/cards/ExemptionCard";
import TongueCard from "@/components/cards/TongueCard";
import SoliderCard from "@/components/cards/SoliderCard";

const Plan = () => {
    const t = useWebSocket(socketUrl, {
        onOpen: () => {
            console.log('opened')

        },

        shouldReconnect: (closeEvent) => true,
    });


    return <>
        <WebsocketInfo hook={t}/>
        <CardsHolder>
            <ScheduleCard tongue={"#FFA5AB"} primary={"#DA627D"}/>
            <ExemptionCard tongue={"#FFDBFD"} primary={"#C9BEFF"}/>
            <SoliderCard/>
            <TongueCard iconText={"10"} mainText={"10:00 - 15:00"} tongue={"#FFDBFD"} primary={"#C9BEFF"}>
                <p>Test</p>

            </TongueCard>
            <SoliderCard/>
            <SoliderCard/>
        </CardsHolder>
    </>
}
export default Plan;