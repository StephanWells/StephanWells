import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    projectTypeColours?: Record<string, string>;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1df0ec",
    },
  },
  typography: {
    h3: {
      fontSize: "40px",
      paddingBottom: "10px",
      paddingLeft: "26px",
      fontFamily: "Encode Sans SC",
    },
    h4: {
      fontSize: "34px",
      letterSpacing: "2.5px",
      fontFamily: "Encode Sans SC",
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
  },
});

export default theme;
