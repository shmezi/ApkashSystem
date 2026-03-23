import {Box, Typography} from "@mui/material";
import RollerSelector from "@/components/selection/RollerSelector";
import DailyTongue from "@/components/tongues/day-selector/DailyTongue";
import Image from "next/image";
import BaseCard from "@/components/cards/BaseCard";

const TongueCard = ({
                        children,
                        iconSrc,
                        iconText,
                        mainText,
                        tongue,
                        primary
                    }: {
    children: React.ReactNode,
    iconSrc?: string,
    iconText: string,
    mainText: string,
    tongue: string,
    primary: string
}) => {


    return <BaseCard>

        <Box className={"ic-header"} display="flex" width={"100%"}>

            <Box zIndex={5} alignSelf={"end"}
                 bgcolor={tongue} sx={{borderTopLeftRadius: "4px"}}
                 height={"2rem"}
                 className={"ic-tongue"}
                 maxWidth={"70%"}
                 display={"flex"}
                 flexDirection={"row"} alignItems={"end"}>

                {children}
            </Box>
            <Box className={"ic-avatar"} zIndex={1} width={"30%"} position={"relative"} sx={{top: "15px"}}>
                <Image
                    loading={"eager"}
                    width={0}
                    height={0}
                    alt={"image"}
                    sizes={"100vw"}
                    src={iconSrc ?? "/content/people.png"}
                    style={{width: "100%", height: "100%"}}
                />

            </Box>


        </Box>
        <Box className={"ic-text-content"} bgcolor={primary} display="flex" sx={{borderRadius: "15px 0px 0px 15px "}}>
            <Box className={"ic-descriptiaon"} width={"70%"} display={"flex"} justifyContent={"center"}
                 alignItems={"center"}>
                <Typography variant={"h4"}>{mainText}</Typography>
            </Box>
            <Box className={"ic-icon"} bgcolor={primary} zIndex={5} border={"black solid 3px"} borderRadius={"15px"}
                 width={"30%"} display={"flex"}
                 justifyContent={"center"} alignItems={"center"}>
                <Typography variant={"h3"}>{iconText}</Typography>

            </Box>

        </Box>
    </BaseCard>
}
export default TongueCard;