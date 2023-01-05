import { Box, Container, Divider, Fade, Grow, Typography } from "@mui/material";
import { experienceYears } from "../../../constants/uiConstants";
import { tabState } from "../../header/definitions/tab-state";
import LinkButton from "../link-button";
import "./index.css";

interface OverviewProps {
  tabState: tabState;
}

const Overview = (props: OverviewProps) => {
  const year = new Date();

  return (
    <Grow
      in={props.tabState.value === 0}
      style={{ transformOrigin: "50% 0 0" }}
      timeout={600}
    >
      <Container maxWidth={"md"} className="overview-container">
        <Fade
          in={props.tabState.value === 0}
          style={{ transitionDelay: "300ms" }}
        >
          <Box>
            <Box className="colour-chip-primary" />
            <Typography variant="h3" component="span">
              Hello there!
            </Typography>
            <Divider component="div" className="divider" />
            <Typography display="inline">My name is </Typography>
            <Typography color={"primary"} display="inline">
              <b>Stephan Wells</b>
            </Typography>
            <Typography display="inline">
              . I'm a software developer with a master's degree in{" "}
            </Typography>
            <LinkButton
              href="https://www.uu.nl/en/masters/game-and-media-technology"
              tooltip="Utrecht University"
            />
            <Typography color={"primary"} display="inline">
              <b>Game & Media Technology</b>
            </Typography>{" "}
            <Typography display="inline">and</Typography>{" "}
            <Typography display="inline" className="number-increment">
              <b>{year.getFullYear() - experienceYears.code}</b>
            </Typography>{" "}
            <Typography display="inline">
              years of professional experience. I'm also a hobbyist musician
              with
            </Typography>{" "}
            <Typography display="inline" className="number-increment">
              <b>{year.getFullYear() - experienceYears.music}</b>
            </Typography>{" "}
            <Typography display="inline">
              years of experience composing music for personal projects, games,
              animations, and student films, and I'm a hobbyist video editor
              with
            </Typography>{" "}
            <Typography display="inline" className="number-increment">
              <b>{year.getFullYear() - experienceYears.video}</b>
            </Typography>{" "}
            <Typography display="inline">
              years of experience on personal projects.
            </Typography>
            <Typography display="block" sx={{ marginTop: "10px" }}>
              This is my corner of the web where you can browse through my
              portfolio of projects and learn a bit about me, my hobbies, and my
              professional background. Hit the links in the navigation bar above
              to explore further or contact me for any business enquiries!
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Grow>
  );
};

export default Overview;
