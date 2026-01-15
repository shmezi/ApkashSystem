"use client"

import {Box, Typography} from "@mui/material"
import {Day} from "@/components/tongues/day-selector/DailyTongue";

const ButtonToggle = ({day, selectedDay, setSelectedDay}: { day: Day, selectedDay: Set<number>, setSelectedDay: (value: number) => void }) => {
console.log("ButtonToggle", day, selectedDay);
    return <Box
        sx={{cursor: "pointer"}}

        onClick={() => {
            setSelectedDay(day.index)
        }}
        borderRadius={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"1.8rem"}
        margin={"0.1rem"}
        height={"1.8rem"}
        bgcolor={selectedDay.has(day.index) ? "green" : "red"}>
        <Typography
            variant={"h6"}
            color={"white"}
            display={"flex"}
            paddingRight={"3px"}
            paddingLeft={"4px"}>{day.shortForm()}</Typography>
    </Box>
}

export default ButtonToggle