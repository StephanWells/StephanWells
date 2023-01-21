import "./index.css";
import Header from "./sections/header";
import { ThemeProvider } from "@mui/material";
import theme from "./config/mui-theme";
import { useState } from "react";
import { tabState } from "./definitions/tab-state";

const App = () => {
  const [state, setState] = useState<tabState>({ value: 0 });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header state={state} setState={setState} />
      </div>
    </ThemeProvider>
  );
};

export default App;
