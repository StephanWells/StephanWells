import {
  Collapse,
  Box,
  Popper,
  MenuItem,
  SvgIcon,
  Fade,
  Slide,
} from "@mui/material";
import Grow from "@mui/material/Grow";
import { useRef } from "react";
import { ReactComponent as CodeIcon } from "../../../../assets/icon/code.svg";
import { ReactComponent as MusicIcon } from "../../../../assets/icon/music.svg";
import { ReactComponent as VideoIcon } from "../../../../assets/icon/video.svg";

interface PopupProps {
  anchorEl: (EventTarget & Element) | null;
  handleClose: () => void;
  handleMenuClick: (value: number) => void;
}

const Popup = (props: PopupProps) => {
  const containerRef = useRef(null);

  return (
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
          <Box
            className="navbar-menu"
            sx={{ boxShadow: "4px 6px 10px #121212", padding: "5px" }}
            overflow="hidden"
          >
            <MenuItem onClick={() => props.handleMenuClick(1.1)}>
              <SvgIcon
                className="navbar-menuicon"
                component={CodeIcon}
                fontSize={"inherit"}
              />
              Coding
            </MenuItem>
            <MenuItem onClick={() => props.handleMenuClick(1.2)}>
              <SvgIcon
                className="navbar-menuicon"
                component={MusicIcon}
                fontSize={"inherit"}
                sx={{ "padding-top": "3px" }}
              />
              Music
            </MenuItem>
            <MenuItem onClick={() => props.handleMenuClick(1.3)}>
              <SvgIcon
                className="navbar-menuicon"
                component={VideoIcon}
                fontSize={"inherit"}
                sx={{ "padding-top": "3px" }}
              />
              Video
            </MenuItem>
          </Box>
        </Slide>
      )}
    </Popper>
  );
};

export default Popup;
