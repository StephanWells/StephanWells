import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./component/tabpanel";
import "./index.css";

function tabProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="navbar"
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          centered={true}
        >
          <Tab label="OVERVIEW" {...tabProps(0)} />
          <Tab label="CODING" {...tabProps(1)} />
          <Tab label="MUSIC" {...tabProps(2)} />
          <Tab label="VIDEO" {...tabProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Overview goes here
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coding goes here
      </TabPanel>
      <TabPanel value={value} index={2}>
        Music goes here
      </TabPanel>
      <TabPanel value={value} index={3}>
        Video goes here
      </TabPanel>
    </Box>
  );
};

export default NavBar;
