import { Box, ClickAwayListener, Popper, Slide } from "@mui/material";
import { useRef } from "react";
import { ReactComponent as CodeIcon } from "../../../../assets/ui-icon/code.svg";
import { ReactComponent as MusicIcon } from "../../../../assets/ui-icon/music.svg";
import { ReactComponent as VideoIcon } from "../../../../assets/ui-icon/video.svg";
import { projectTypeColours } from "../../../../constants/uiConstants";
import ProjectTypeItem from "./component/project-type-item";
import "./index.css";

interface PopupProps {
  anchorEl: (EventTarget & Element) | null;
  handleClose: () => void;
  handleMenuClick: (value: number) => void;
  setIndicatorColor: (value: string) => void;
}

const Popup = (props: PopupProps) => {
  const containerRef = useRef(null);

  return (
    <ClickAwayListener onClickAway={props.handleClose}>
      <Popper
        open={!!props.anchorEl}
        anchorEl={props.anchorEl}
        transition
        sx={{ overflow: "hidden" }}
      >
        {({ TransitionProps }) => (
          <Slide
            {...TransitionProps}
            container={containerRef.current}
            direction="down"
          >
            <Box className="navbar-menu" overflow="hidden">
              <ProjectTypeItem
                icon={CodeIcon}
                index={1.1}
                name={"Coding"}
                description={"Games, simulations, and applications"}
                color={projectTypeColours.code}
                extraPadding="4px"
                handleMenuClick={props.handleMenuClick}
                setIndicatorColor={props.setIndicatorColor}
              />
              <ProjectTypeItem
                icon={MusicIcon}
                index={1.2}
                name={"Music"}
                description={"Music compositions (originals and covers)"}
                color={projectTypeColours.music}
                extraPadding="6px"
                handleMenuClick={props.handleMenuClick}
                setIndicatorColor={props.setIndicatorColor}
              />
              <ProjectTypeItem
                icon={VideoIcon}
                index={1.3}
                name={"Video"}
                description={"Videos produced and edited from scratch"}
                color={projectTypeColours.video}
                extraPadding="6px"
                handleMenuClick={props.handleMenuClick}
                setIndicatorColor={props.setIndicatorColor}
              />
            </Box>
          </Slide>
        )}
      </Popper>
    </ClickAwayListener>
  );
};

export default Popup;
