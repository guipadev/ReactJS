import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { themePalette } from '../constants/enums.ts';

// Provider 
type ThemeProp = {
    children: JSX.Element
}


const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.LIME,
        }
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                },
            },
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: "0.8em",
                    fontSize: "1em",
                },
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN,
                },
                standardSuccess: {
                    border: `1px solid ${themePalette.SUCCES_MAIN}`,
                    background: themePalette.BG_SUCCES_MAIN,
                },
            },
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}