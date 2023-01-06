import { createTheme } from "@mui/material";

export default createTheme({
    palette:{
        background:{
            default: '#aac8ff',
        },
        primary:{
            main: "#14194c",
        },
        pink:'linear-gradient(138.72deg, #dc8295 0%, #dc687c 95.83%)'
    },
    typography:{
        fontFamily:'Mulish, sans-serif',
        h4: {
            fontWeight: 800
        },
        h5: {
            fontWeight: 800
        }


    }
})