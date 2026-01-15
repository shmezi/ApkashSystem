import {List, ListItem, Typography} from "@mui/material";
import {useEffect, useRef, useState} from "react";


const SelectionItem = (
    {
        item,
        items,
        index,
        tongueColor,
        selected,
        setSelected,

    }: {
        item: string
        items: string[],
        index: number,
        tongueColor: string,
        selected: number,
        setSelected: (index: number) => void,


    }) => {
    return <ListItem


        onClick={(e) => {
            if (index + 1 == items.length) return
            if (index == 0) return
            setSelected(index)
        }}


        sx={{
            maxHeight: "2rem",
            cursor: "pointer",
            bgcolor: selected == index ? tongueColor : index % 2 == 0 ? "grey" : "darkGrey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <Typography
            onMouseEnter={() => {
                setSelected(selected)
            }}


            variant={"h6"}
            color={"white"}
            display={"flex"}
            paddingRight={"3px"}
            paddingLeft={"4px"}
        >{item}</Typography>
    </ListItem>
}
const ItemSelectionList = ({close, items, tongueColor, originalSelection}: {
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
        disablePadding sx={{

        position: "relative",
        maxHeight: "6rem",
        overflowY: "scroll",
        alignSelf: "end", top: "2rem"

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

            return <SelectionItem index={index} item={item} items={items} tongueColor={tongueColor} selected={selected}
                                  setSelected={setSelected}/>
        })}

    </List>
}
export default ItemSelectionList;