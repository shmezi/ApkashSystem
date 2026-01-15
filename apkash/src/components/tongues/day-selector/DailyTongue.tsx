"use client"
import {Box, Typography} from "@mui/material";
import {useState} from "react";
import DaySelector from "@/components/tongues/day-selector/DaySelector";

export class Day {
    static readonly SUNDAY = new Day('ראשון', 0);
    static readonly MONDAY = new Day('שני', 1);
    static readonly TUESDAY = new Day('שלישי', 2);
    static readonly WEDNESDAY = new Day('רביעי', 3);
    static readonly THURSDAY = new Day('חמישי', 4);
    static readonly FRIDAY = new Day('שישי', 5);
    static readonly SATURDAY = new Day('שבת', 6);
    static readonly days = [Day.SUNDAY, Day.MONDAY, Day.TUESDAY, Day.WEDNESDAY, Day.THURSDAY, Day.FRIDAY, Day.SATURDAY];

    static ofValue = (key: number): Day => {
        return Day.days[key]
    }

    // private to disallow creating other instances of this type
    private constructor(readonly name: string, readonly index: number) {

    }

    shortForm = () => {
        return this.name.substring(0, 2);
    }

    toString() {
        return this.name;
    }
}

const isRangeOfDays = (sortedDays: Day[]) => {
    let prev = sortedDays[0].index
    for (const day of sortedDays) {
        if (prev == day.index) continue
        if (prev + 1 != day.index)
            return false
        prev = day.index
    }
    return true
}

const tongueMessage = (selected: Set<number>): string => {
    if (selected.size == 0)
        return "אנא בחר טווח"
    const sortedSelecedValues = selected.values().toArray().sort()

    const selectedDays = sortedSelecedValues.map((day) => {
        return Day.ofValue(day)
    })

    if (selectedDays.length <= 1)
        return selectedDays[0].toString()

    if (isRangeOfDays(selectedDays))
        return selectedDays[0].toString() + " - " + selectedDays[selectedDays.length - 1]

    if (selected.size >= 4)
        return selectedDays.map((day) => {
            return day.shortForm()
        }).join(", ")


    return selectedDays.map((day) => {
        return day.name
    }).join(", ")
}

const DailyTongue = ({tongueColor}: { tongueColor: string }) => {
    const [open, setOpeneed] = useState(false);
    const [selected, setSelected] = useState(new Set<number>());


    return <Box flexGrow={1} height={"100%"} display={"flex"}
                onMouseEnter={() => setOpeneed(true)}
                onMouseLeave={()=>{setOpeneed(false)}}
    >

        {open ? <DaySelector
                tongueColor={tongueColor}
                selected={selected}
                setSelected={(e) => {
                    const newSelection = new Set<number>(selected)
                    newSelection.has(e) ? newSelection.delete(e) : newSelection.add(e)
                    setSelected(newSelection)
                }}
                close={() => {
                    setOpeneed(false)
                }}/> :
            <Typography
                overflow={"clip"}
                textOverflow={"clip"}
                variant={"h6"}
                color={"white"}
                display={"flex"}
                paddingRight={"3px"}
                paddingLeft={"4px"}>{tongueMessage(selected).toString()}</Typography>}
    </Box>
}

export default DailyTongue;