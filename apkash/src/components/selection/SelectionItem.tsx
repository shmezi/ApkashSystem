import {Typography} from "@mui/material";
import {useState} from "react";
import ItemSelectionList from "@/components/selection/ItemSelectionList";

const SelectionItem = ({primary, tongue}: { primary: string, tongue: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const items = ["aaa", "קבוע", "שבוע זוגי", "שבוע אי-זוגי","שבוע א בחודש","שבוע ב בחודש","שבוע ג בחודש", "bbb",];
    const [selected, setSelected] = useState(1);
    return isOpen ?
        <ItemSelectionList
            items={items}
            tongueColor={tongue}
            originalSelection={selected}
            close={(item) => {
                setIsOpen(false);
                setSelected(item)

            }}/> :
        <Typography
            onMouseEnter={(e) => {
                setIsOpen(true)
            }}
            variant={"h6"}
            color={"white"}
            display={"flex"}
            paddingRight={"3px"}
            paddingLeft={"4px"}

        >{items[selected]}</Typography>


}
export default SelectionItem;