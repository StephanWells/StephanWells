import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1df0ec",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
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
  },
});

export default theme;
