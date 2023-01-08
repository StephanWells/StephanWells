import { Tabs, Tab, SvgIcon, useTheme } from "@mui/material";
import { ReactComponent as ContactIcon } from "../../../assets/ui-icon/contact.svg";
import { ReactComponent as OverviewIcon } from "../../../assets/ui-icon/overview.svg";
import { ReactComponent as AboutIcon } from "../../../assets/ui-icon/about.svg";
import { ReactComponent as ProjectIcon } from "../../../assets/ui-icon/project.svg";
import { tabState } from "../../../definitions/tab-state";
import "./index.css";

interface NavBarProps {
  currentState: tabState;
  setTabState: (value: tabState) => void;
  indicatorColor: string;
  setIndicatorColor: (value: string) => void;
}

const NavBar = (props: NavBarProps) => {
  const tabProps = (index: number) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    props.setTabState({ value: newValue });
  };

  const handleClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    props.setTabState({
      value: props.currentState.value,
      anchorEl: event.currentTarget,
    });
  };

  const theme = useTheme();

  return (
    <Tabs
      className="navbar"
      value={Math.floor(props.currentState.value)}
      onChange={handleChange}
      aria-label="tabs"
      textColor="inherit"
      variant="scrollable"
      scrollButtons="auto"
      TabIndicatorProps={{
        style: {
          background: props.indicatorColor,
        },
      }}
    >
      <Tab
        label={"OVERVIEW"}
        icon={<SvgIcon component={OverviewIcon} fontSize={"inherit"} />}
        iconPosition="start"
        onClick={() => props.setIndicatorColor(theme.palette.primary.main)}
        {...tabProps(0)}
      />
      <Tab
        label={"ABOUT"}
        icon={<SvgIcon component={AboutIcon} fontSize={"inherit"} />}
        iconPosition="start"
        onClick={() => props.setIndicatorColor(theme.palette.primary.main)}
        {...tabProps(1)}
      />
      <Tab
        label={"PROJECTS"}
        icon={<SvgIcon component={ProjectIcon} fontSize={"inherit"} />}
        onClick={(event) => handleClick(event)}
        iconPosition="start"
        {...tabProps(2)}
      />
      <Tab
        label={"CONTACT"}
        icon={<SvgIcon component={ContactIcon} fontSize={"inherit"} />}
        iconPosition="start"
        onClick={() => props.setIndicatorColor(theme.palette.primary.main)}
        {...tabProps(3)}
      />
    </Tabs>
  );
};

export default NavBar;
