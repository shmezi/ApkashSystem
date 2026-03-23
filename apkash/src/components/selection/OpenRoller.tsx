import {List, ListItem, Typography} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import RollerItem from "@/components/selection/RollerItem";


const OpenRoller = ({close, items, tongueColor, originalSelection}: {
    close: (item: number) => void,
    items: string[],
    tongueColor: string,
    originalSelection: number
}) => {

    const [selected, setSelected] = useState(originalSelection);
    const containerRef = useRef(null);
    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;
        const item = element as HTMLUListElement;
        const twoRem = Number(item.computedStyleMap().get("font-size")?.toString().replace("px", "")) * 2
        item.scrollTo(0, selected * twoRem - twoRem);
        console.log("Scrolling to " + selected);
    }, []);
    return <List
        ref={containerRef}
        minWidth={"60rem"}



        disablePadding sx={{

        position: "relative",
        height: "6rem",
        overflowY: "scroll",
        alignSelf: "end",
        top: "2rem",



    }}
        onMouseLeave={() => {
            close(selected)
        }}
        onScroll={(e) => {
            const c = e.target as HTMLUListElement;
            let value = (c.scrollTop / Number(c.computedStyleMap().get("font-size")?.toString().replace("px", "")));
            const s = Math.floor((value % 2 == 0 ? value : value + 1) / 2 + 1)
            setSelected(s);

        }}
    >
        {items.map((item, index) => {

            return <RollerItem key={index} index={index} item={item} items={items} tongueColor={tongueColor}
                               selected={selected}
                               setSelected={setSelected}/>
        })}

    </List>
}
export default OpenRoller;