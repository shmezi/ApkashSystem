import {ListItem, Typography} from "@mui/material";

const RollerItem = (
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
            whiteSpace={"nowrap"}
            overflow={"visible"}


        >{item}</Typography>
    </ListItem>
}
export default RollerItem;