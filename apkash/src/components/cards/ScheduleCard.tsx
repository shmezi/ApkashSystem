"use client"

import DailyTongue from "@/components/tongues/day-selector/DailyTongue";
import TongueCard from "@/components/cards/TongueCard";


const ScheduleCard = ({tongue, primary}: { tongue: string, primary: string }) => {

    return <TongueCard iconText={"10"} mainText={"10AM"} tongue={tongue} primary={primary}> <DailyTongue
        tongueColor={tongue}/>
    </TongueCard>
}


export default ScheduleCard
