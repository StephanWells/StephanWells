import "./index.css";
import NavBar from "./component/navbar";
import { ThemeProvider } from "@mui/material";
import theme from "./config/mui-theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <NavBar />
      </div>
    </ThemeProvider>
  );
};

export default App;
