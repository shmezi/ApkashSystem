"use client"
import {Box, Typography} from "@mui/material"
import Image from "next/image";
import RollerSelector from "@/components/selection/RollerSelector";
import DailyTongue from "@/components/tongues/day-selector/DailyTongue";
import TongueCard from "@/components/cards/TongueCard";


const ExemptionCard = ({tongue, primary}: { tongue: string, primary: string }) => {
    return <TongueCard tongue={tongue} primary={primary} iconText={"10"} mainText={"10:00 - 12:00"}>

        <RollerSelector tongue={tongue} primary={primary}/>
        <Typography variant={"h6"} color={"white"} display={"flex"} paddingRight={"3px"}
                    paddingLeft={"4px"}>|</Typography>
        <DailyTongue tongueColor={tongue}/>
    </TongueCard>

}


export default ExemptionCard