import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    projectTypeColours?: Record<string, string>;
  }
}

let theme = createTheme({});
theme = createTheme(theme, {
  palette: {
    mode: "dark",
    primary: {
      main: "#1df0ec",
    },
  },
  typography: {
    h3: {
      fontSize: "calc(25px + 1.2vw)",
      paddingBottom: "10px",
      paddingLeft: "26px",
      fontFamily: "Encode Sans SC",
    },
    h4: {
      fontSize: "34px",
      letterSpacing: "2.5px",
      fontFamily: "Encode Sans SC",
    },
    h5: {
      fontSize: "20px",
      fontFamily: "Encode Sans SC",
    },
    subtitle2: {
      fontSize: "12px",
      fontFamily: "Encode Sans SC",
    },
    caption: {
      letterSpacing: "0.2px",
    },
  },
  components: {
    MuiPopper: {
      defaultProps: {
        style: {
          color: "#e9eaf2",
          padding: "5px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          "@media (max-width: 600px)": {
            minHeight: "64px",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthMd: {
          [theme.breakpoints.up("md")]: {
            maxWidth: "950px",
          },
        },
      },
    },
  },
});

export default theme;
