import CircleIcon from "../../../component/circle-icon/small";
import { ReactComponent as CodeIcon } from "../../../assets/ui-icon/code.svg";
import { ReactComponent as MusicIcon } from "../../../assets/ui-icon/music.svg";
import { ReactComponent as VideoIcon } from "../../../assets/ui-icon/video.svg";
import "./index.css";
import { projectTypeColours } from "../../../constants/uiConstants";
import { Typography, Grid, Box } from "@mui/material";

const Skills = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4} sx={{ color: projectTypeColours.code }}>
        <Box className="center-icon">
          <CircleIcon icon={CodeIcon} />
        </Box>
        <Typography variant="h5" textAlign="center">
          Developer
        </Typography>
        <Box className="skill-body">
          <Typography variant="body2" textAlign="center">
            Professional software developer with full-stack experience in JS/TS,
            Java, C#, & more!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4} sx={{ color: projectTypeColours.music }}>
        <Box className="center-icon">
          <CircleIcon icon={MusicIcon} extraPadding="2px 0 0 2px" />
        </Box>
        <Typography variant="h5" textAlign="center">
          Musician
        </Typography>
        <Box className="skill-body">
          <Typography variant="body2" textAlign="center">
            Freelancing musician and audio engineer, with work on various games,
            animations, films, podcasts, and other projects!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{ color: projectTypeColours.video }}>
        <Box className="center-icon">
          <CircleIcon icon={VideoIcon} extraPadding="3px 0 0 3px" />
        </Box>
        <Typography variant="h5" textAlign="center">
          Video Editor
        </Typography>
        <Box className="skill-body">
          <Typography variant="body2" textAlign="center">
            Passionate hobbyist video editor using DaVinci Resolve with work on
            music & gaming YouTube channels.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Skills;
