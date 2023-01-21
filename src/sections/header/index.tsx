import { Box, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import NavBar from "./navbar";
import Popup from "./popup";
import Title from "./title";
import { tabState } from "../../definitions/tab-state";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";
import About from "../about";
import Overview from "../overview";
import TabPanel from "./tabpanel";

interface HeaderProps {
  state: tabState;
  setState: (state: tabState) => void;
}

const Header = (props: HeaderProps) => {
  const handleCloseCallback = () => {
    props.setState({ value: props.state.value, anchorEl: null });
  };

  const handleMenuClickCallback = (menuItem: number) => {
    props.setState({ value: menuItem });
  };

  const [indicatorColor, setIndicatorColor] = useState<string>("#1df0ec");
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className="header-wrapper">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar className="toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className="menu-button"
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Title tabState={props.state} />
          <NavBar
            currentState={props.state}
            setTabState={props.setState}
            indicatorColor={indicatorColor}
            setIndicatorColor={setIndicatorColor}
          />
        </Toolbar>
      </Box>
      <Popup
        anchorEl={props.state.anchorEl ?? null}
        handleClose={handleCloseCallback}
        handleMenuClick={handleMenuClickCallback}
        setIndicatorColor={setIndicatorColor}
      />
      <TabPanel value={props.state.value} index={0}>
        <Overview tabState={props.state} />
      </TabPanel>
      <TabPanel value={props.state.value} index={1}>
        <About tabState={props.state} />
      </TabPanel>
      <TabPanel value={props.state.value} index={2}>
        <>Projects goes here</>
      </TabPanel>
      <TabPanel value={props.state.value} index={2.1}>
        <>Code goes here</>
      </TabPanel>
      <TabPanel value={props.state.value} index={2.2}>
        <>Music goes here</>
      </TabPanel>
      <TabPanel value={props.state.value} index={2.3}>
        <>Video goes here</>
      </TabPanel>
      <TabPanel value={props.state.value} index={2}>
        <>Contact goes here</>
      </TabPanel>
    </Box>
  );
};

export default Header;
