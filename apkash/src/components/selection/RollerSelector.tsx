import {Typography, Box} from "@mui/material";
import {useState} from "react";
import OpenRoller from "@/components/selection/OpenRoller";

const RollerSelector = ({primary, tongue}: { primary: string, tongue: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const items = ["----", "קבוע", "שבוע זוגי", "שבוע אי-זוגי", "שבוע א בחודש", "שבוע ב בחודש", "שבוע ג בחודש", "----",];
    const [selected, setSelected] = useState(1);
    return isOpen ?
        <Box overflow={"visible"}>
            <OpenRoller
                items={items}
                tongueColor={tongue}
                originalSelection={selected}
                close={(item) => {
                    setIsOpen(false);
                    setSelected(item)

                }}/>
        </Box> :
        <Typography
            onMouseEnter={(e) => {
                setIsOpen(true)
            }}
            overflow={"visible"}
            variant={"h6"}
            color={"#989898"}
            display={"flex"}
            paddingRight={"3px"}
            paddingLeft={"4px"}
            noWrap

        >{items[selected]}</Typography>


}
export default RollerSelector;