import "./index.css";
import Header from "./sections/header";
import { ThemeProvider } from "@mui/material";
import theme from "./config/mui-theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
