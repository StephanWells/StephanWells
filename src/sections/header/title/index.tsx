import { Box, Typography } from "@mui/material";
import { projectTypeColours } from "../../../constants/uiConstants";
import { tabState } from "../../../definitions/tab-state";
import "./index.css";

interface TitleProps {
  tabState: tabState;
}

const Title = (props: TitleProps) => {
  return (
    <Box
      sx={{
        marginLeft: { md: "0", sm: "auto", xs: "auto" },
        paddingRight: "294px",
      }}
    >
      <Box className="toolbar-title">
        <Typography variant="h4">Stephan Wells</Typography>
      </Box>
      <Box className="toolbar-subtitle">
        <Typography
          variant={"body2"}
          fontFamily={"Encode Sans SC"}
          className="toolbar-subtitle-text"
          color={projectTypeColours.code}
          style={{
            opacity: props.tabState.value === 2.1 ? 1 : 0.5,
          }}
        >
          DEVELOPER
        </Typography>
        <Typography
          variant={"body2"}
          fontFamily={"Encode Sans SC Bold"}
          className="toolbar-subtitle-separator"
        >
          |
        </Typography>
        <Typography
          variant={"body2"}
          fontFamily={"Encode Sans SC"}
          className="toolbar-subtitle-text"
          color={projectTypeColours.music}
          style={{ opacity: props.tabState.value === 2.2 ? 1 : 0.5 }}
        >
          MUSICIAN
        </Typography>
        <Typography
          variant={"body2"}
          fontFamily={"Encode Sans SC Bold"}
          className="toolbar-subtitle-separator"
        >
          |
        </Typography>
        <Typography
          variant={"body2"}
          fontFamily={"Encode Sans SC"}
          className="toolbar-subtitle-text"
          color={projectTypeColours.video}
          style={{ opacity: props.tabState.value === 2.3 ? 1 : 0.5 }}
        >
          VIDEO EDITOR
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
