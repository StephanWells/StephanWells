import { Tabs, Tab, SvgIcon } from "@mui/material";
import { ReactComponent as ContactIcon } from "../../../../assets/icon/contact.svg";
import { ReactComponent as OverviewIcon } from "../../../../assets/icon/overview.svg";
import { ReactComponent as ProjectIcon } from "../../../../assets/icon/project.svg";
import { tabState } from "../../definitions/tab-state";

interface NavBarProps {
  currentState: tabState;
  setTabState: (value: tabState) => void;
}

const TabBar = (props: NavBarProps) => {
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

  return (
    <Tabs
      className="navbar"
      value={props.currentState.value}
      onChange={handleChange}
      aria-label="tabs"
    >
      <Tab
        label={"OVERVIEW"}
        icon={<SvgIcon component={OverviewIcon} fontSize={"inherit"} />}
        iconPosition="start"
        {...tabProps(0)}
      />
      <Tab
        label={"PROJECTS"}
        icon={<SvgIcon component={ProjectIcon} fontSize={"inherit"} />}
        onAnimationStart={(event) => {
          props.currentState.value === 1 && handleClick(event);
        }}
        iconPosition="start"
        {...tabProps(1)}
      />
      <Tab
        label={"CONTACT"}
        icon={<SvgIcon component={ContactIcon} fontSize={"inherit"} />}
        iconPosition="start"
        {...tabProps(2)}
      />
    </Tabs>
  );
};

export default TabBar;
