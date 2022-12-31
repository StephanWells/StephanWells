import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import NavBar from "./component/navbar";
import Popup from "./component/popup";
import TabPanel from "./component/tabpanel";
import Title from "./component/title";
import { tabState } from "./definitions/tab-state";
import "./index.css";

const Header = () => {
  const [state, setState] = useState<tabState>({
    value: 0,
  });

  const handleCloseCallback = () => {
    setState({ value: state.value, anchorEl: null });
  };

  const handleMenuClickCallback = (menuItem: number) => {
    setState({ value: menuItem });
  };

  const [indicatorColor, setIndicatorColor] = useState<string>("#1df0ec");

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar className="toolbar">
          <Title tabState={state} />
          <NavBar
            currentState={state}
            setTabState={setState}
            indicatorColor={indicatorColor}
            setIndicatorColor={setIndicatorColor}
          />
        </Toolbar>
      </Box>
      <Popup
        anchorEl={state.anchorEl ?? null}
        handleClose={handleCloseCallback}
        handleMenuClick={handleMenuClickCallback}
        setIndicatorColor={setIndicatorColor}
      />
      <TabPanel value={state.value} index={0}>
        <>
          Overview goes here Overview goes here Overview goes here Overview goes
          here
        </>
      </TabPanel>
      <TabPanel value={state.value} index={1}>
        <>Projects goes here</>
      </TabPanel>
      <TabPanel value={state.value} index={1.1}>
        <>Code goes here</>
      </TabPanel>
      <TabPanel value={state.value} index={1.2}>
        <>Music goes here</>
      </TabPanel>
      <TabPanel value={state.value} index={1.3}>
        <>Video goes here</>
      </TabPanel>
      <TabPanel value={state.value} index={2}>
        <>Contact goes here</>
      </TabPanel>
    </Box>
  );
};

export default Header;
