import ButtonToggle from "@/components/tongues/day-selector/ButtonToggle";
import {Box} from "@mui/material";
import {Day} from "@/components/tongues/day-selector/DailyTongue";

const DaySelector = ({tongueColor, close, selected, setSelected}: {
    tongueColor: string,
    close: () => void,
    selected: Set<number>,
    setSelected: (value: number) => void
}) => {

    return <Box display="flex" alignItems={"center"}   justifyContent={"center"} bgcolor={tongueColor}
                onMouseLeave={(e) => {


                    close()
                }}

    >
        <ButtonToggle day={Day.SUNDAY} selectedDay={selected} setSelectedDay={setSelected}/>
        <ButtonToggle day={Day.MONDAY} selectedDay={selected} setSelectedDay={setSelected}/>
        <ButtonToggle day={Day.TUESDAY} selectedDay={selected} setSelectedDay={setSelected}/>
        <ButtonToggle day={Day.WEDNESDAY} selectedDay={selected} setSelectedDay={setSelected}/>
        <ButtonToggle day={Day.THURSDAY} selectedDay={selected} setSelectedDay={setSelected}/>
        <ButtonToggle day={Day.FRIDAY} selectedDay={selected} setSelectedDay={setSelected}/>
        <ButtonToggle day={Day.SATURDAY} selectedDay={selected} setSelectedDay={setSelected}/>

    </Box>
}
export default DaySelector;