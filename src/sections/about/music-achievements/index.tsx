import { Box, Typography } from "@mui/material";
import ImageWrapper from "../../../component/image-wrapper";
import LinkButton from "../../../component/link-button";
import { projectTypeColours } from "../../../constants/uiConstants";
import RiftImage from "../../../assets/images/rift.png";
import SpreadsheetImage from "../../../assets/images/spreadsheet.png";
import "./index.css";

const MusicAchievements = () => {
  return (
    <Box className="music-achievements-container">
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        On the{" "}
        <Typography color={projectTypeColours.music} display="inline">
          <b>music</b>
        </Typography>{" "}
        side,
      </Typography>{" "}
    </Box>
  );
};

export default MusicAchievements;
