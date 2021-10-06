import { typographyClasses } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 477,
      md: 983,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 1)",
      mainGradient:
        "linear-gradient(90deg, rgba(0,0,0) 20%, rgba(0,0,0,0) 100%)",
      navGradient:
        "linear-gradient(90deg, #010101 0%, rgba(0,0,0,.50) 30%, rgba(0,0,0,0) 44%)"
    },
    btnPrimary: {
      main: "#2885F6"
    }
  },
  typography: {
    subtitle1: {
      fontSize: 18,
      fontWeight: 700,
      color: "#FFFFFF"
    }
  }
});

export default theme;
