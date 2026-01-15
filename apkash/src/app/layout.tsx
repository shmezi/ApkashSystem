import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import {ReactNode} from "react";
// or `v1X-appRouter` if you are using Next.js v1X
import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import theme from "@/app/theme";


export default function RootLayout({children}: { children: ReactNode }) {

    return (

        <html lang="he" dir="rtl" style={{width: "100vw", height: "100vh", overflow:"clip"}}>
        <body>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Box width="100vw" height="100vh">
                    {children}
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
