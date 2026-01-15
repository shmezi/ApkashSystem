"use client"
import {Box, Typography} from "@mui/material"
import Image from "next/image";
import {useState} from "react";
import SelectionItem from "@/components/selection/SelectionItem";
import DailyTongue from "@/components/tongues/day-selector/DailyTongue";


const PlanCard = ({tongue, primary}: { tongue: string, primary: string }) => {


    return <Box width={"25rem"} height={"10rem"}>


        <Box className={"ic-header"} display="flex" width={"100%"}>

            <Box zIndex={5} alignSelf={"end"} bgcolor={tongue} sx={{borderTopLeftRadius: "4px"}} height={"2rem"}
                 className={"ic-tongue"}
                 width={"70%"}

                 display={"flex"}
                 flexDirection={"row"} alignItems={"end"}>
               {/*<SelectionItem tongue={tongue} primary={primary} />*/}
               {/* <Typography variant={"h6"} color={"white"} display={"flex"} paddingRight={"3px"}*/}
               {/*             paddingLeft={"4px"}>|</Typography>*/}
                <DailyTongue tongueColor={tongue}/>

            </Box>
            <Box className={"ic-avatar"} zIndex={1} width={"30%"} position={"relative"} sx={{top: "15px"}}>
                <Image
                    loading={"eager"}
                    width={0}
                    height={0}
                    alt={"image"}
                    sizes={"100vw"}
                    src={"/content/people.png"}
                    style={{width: "100%", height: "100%"}}
                />
            </Box>


        </Box>
        <Box className={"ic-text-content"} bgcolor={primary} display="flex" sx={{borderRadius: "15px 0px 0px 15px "}}>
            <Box className={"ic-descriptiaon"} width={"70%"} display={"flex"} justifyContent={"center"}
                 alignItems={"center"}>
                <Typography variant={"h4"}>10:00 - 12:00</Typography>
            </Box>
            <Box className={"ic-icon"} bgcolor={primary} zIndex={5} border={"black solid 3px"} borderRadius={"15px"}
              width={"30%"} display={"flex"}
                 justifyContent={"center"} alignItems={"center"}>
                <Typography variant={"h3"}>10</Typography>
            </Box>

        </Box>
    </Box>
}


export default PlanCard