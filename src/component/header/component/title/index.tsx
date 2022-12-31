import { Typography } from "@mui/material";
import { projectTypeColours } from "../../../../constants/uiConstants";
import { tabState } from "../../definitions/tab-state";
import "./index.css";

interface TitleProps {
  tabState: tabState;
}

const Title = (props: TitleProps) => {
  return (
    <>
      <div className="toolbar-title">
        <Typography
          variant="h4"
          letterSpacing={"2.5px"}
          fontFamily={"Encode Sans SC"}
        >
          Stephan Wells
        </Typography>
      </div>
      <div className="toolbar-subtitle">
        <Typography
          variant={"body2"}
          fontFamily={"Encode Sans SC"}
          color={projectTypeColours.code}
          style={{ opacity: props.tabState.value === 1.1 ? 1 : 0.5 }}
        >
          DEVELOPER
        </Typography>
      </div>
      <div className="toolbar-subtitle-separator">
        <Typography variant={"body2"} fontFamily={"Encode Sans SC Bold"}>
          |
        </Typography>
      </div>
      <div className="toolbar-subtitle">
        <Typography
          variant={"body2"}
          fontFamily={"Encode Sans SC"}
          color={projectTypeColours.music}
          style={{ opacity: props.tabState.value === 1.2 ? 1 : 0.5 }}
        >
          MUSICIAN
        </Typography>
      </div>
      <div className="toolbar-subtitle-separator">
        <Typography variant={"body2"} fontFamily={"Encode Sans SC Bold"}>
          |
        </Typography>
      </div>
      <div className="toolbar-subtitle">
        <Typography
          variant={"body2"}
          fontFamily={"Encode Sans SC"}
          color={projectTypeColours.video}
          style={{ opacity: props.tabState.value === 1.3 ? 1 : 0.5 }}
        >
          VIDEO EDITOR
        </Typography>
      </div>
    </>
  );
};

export default Title;
