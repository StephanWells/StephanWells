import { Collapse, Popover, MenuItem, SvgIcon } from "@mui/material";
import { tabState } from "../../definitions/tab-state";
import { ReactComponent as CodeIcon } from "../../../../assets/icon/code.svg";
import { ReactComponent as MusicIcon } from "../../../../assets/icon/music.svg";
import { ReactComponent as VideoIcon } from "../../../../assets/icon/video.svg";

interface PopupProps {
  anchorEl: (EventTarget & Element) | null;
  handleClose: () => void;
  handleMenuClick: (value: number) => void;
}

const Popup = (props: PopupProps) => {
  return (
    <Collapse>
      <Popover
        open={!!props.anchorEl}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
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
      </Popover>
    </Collapse>
  );
};

export default Popup;
