import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 1170,
      lg: 1430,
      xl: 1700
    }
  },
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 1)",
      mainGradient:
        "linear-gradient(90deg, rgba(0,0,0) 20%, rgba(0,0,0,0) 100%)",
      navGradient:
        "linear-gradient(90deg, #010101 0%, rgba(0,0,0,.50) 30%, rgba(0,0,0,0) 44%)",
      footerGradient:
        "linear-gradient(90deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.50) 60%,#010101 90%)"
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
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 700,
      color: "#FFFFFF"
    },
    h1: {
      fontSize: 56,
      fontWeight: 700,
      color: "#FFFFFF"
    },
    h2: {
      fontSize: 18,
      fontWeight: 400,
      color: "#FFFFFF"
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      color: "#FFFFFF"
    },
    body1: {
      fontSize: 18,
      color: "#FFFFFF"
    }
  }
});

export default theme;
