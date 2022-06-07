import { createTheme } from "@mui/material/styles";

export const Colors = {
  primaryColor: "rgb(236,28,36)",
  secondaryColor: "rgba(255,255,255,1)",
  white: "rgba(255,255,255,1)",
  black: "#000000",
  dark: "rgba(100,100,100,1)",
  default: "#a9a9a9",
  success: "#4caf50",
  info: "#2196f3",
  error: "#f44336",
  warning: "#ff9800",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primaryColor,
    },
    secondary: {
      main: Colors.white,
    },
    white: {
      main: "#FFFFFF",
    },
    warning: {
      main: "#F88808",
    },
    textPrimary: {
      main: Colors.black,
    },
  },
  typography: {
    h5: {
      fontWeight: "500",
      fontSize: "1.25rem",
      margin: 10,
    },
    //Top Headding
    h3: {
      fontWeight: "500",
      fontSize: "1.50rem",
    },

    h6: { fontWeight: "600" },

    subtitle1: { fontWeight: "600", fontSize: "1.05rem" },
    //Table Head
    caption: {
      fontWeight: "600",
      fontSize: "1.05rem",
    },

    subtitle2: { fontWeight: "400", fontSize: "1.05rem" },
    body1: { fontWeight: "500", fontSize: "0.9rem" },

    body2: { fontWeight: "400", fontSize: "0.9rem" },

    overline: {
      fontWeight: "400",
      fontSize: "0.9rem",
      textTransform: "none",
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "white",
        minHeight: 40,
        fontSize: "1.25rem",
        boxShadow: "none",
        // fontWeight: "500",
      },
      root: {
        borderRadius: 7.5,
        textTransform: "none",
        // fontSize: "1rem",
        fontSize: "1.05rem",
        fontWeight: "500",
        minWidth: 20,
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: "500",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 7.5,
        fontWeight: "400",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
        body: {
          backgroundColor: "#F5F6F9",
        },
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: "none",
      },
    },
  },
});
