import { Box, Container, Grow } from "@mui/material";
import { ReactComponent as FaceIcon } from "../../assets/circle-icon/face.svg";
import { ReactComponent as SproutIcon } from "../../assets/circle-icon/sprout.svg";
import { ReactComponent as CodeIcon } from "../../assets/ui-icon/code.svg";
import { ReactComponent as MusicIcon } from "../../assets/ui-icon/music.svg";
import ContentCard from "../../component/content-card";
import { tabState } from "../../definitions/tab-state";
import Background from "./background";
import Greeting from "./greeting";
import "./index.css";
import CodingAchievements from "./coding-achievements";
import ProjectType from "../../definitions/project-type";
import MusicAchievements from "./music-achievements";

interface AboutProps {
  tabState: tabState;
}

const About = (props: AboutProps) => {
  return (
    <Container maxWidth={"md"} className="about-container">
      <Grow
        in={props.tabState.value === 1}
        style={{ transformOrigin: "50% 0 0" }}
        timeout={600}
      >
        <Box>
          <ContentCard icon={FaceIcon} largeIcon animationDelay={300}>
            <Greeting />
          </ContentCard>
        </Box>
      </Grow>
      <Grow
        in={props.tabState.value === 1}
        style={{ transformOrigin: "50% 0 0", transitionDelay: "100ms" }}
        timeout={600}
      >
        <Box>
          <ContentCard
            icon={SproutIcon}
            headerText="Background"
            animationDelay={300}
          >
            <Background />
          </ContentCard>
        </Box>
      </Grow>
      <Grow
        in={props.tabState.value === 1}
        style={{ transformOrigin: "50% 0 0", transitionDelay: "200ms" }}
        timeout={600}
      >
        <Box>
          <ContentCard
            icon={CodeIcon}
            headerText="Coding Achievements"
            animationDelay={400}
            projectType={ProjectType.code}
          >
            <CodingAchievements />
          </ContentCard>
        </Box>
      </Grow>
      <Grow
        in={props.tabState.value === 1}
        style={{ transformOrigin: "50% 0 0", transitionDelay: "300ms" }}
        timeout={600}
      >
        <Box>
          <ContentCard
            icon={MusicIcon}
            headerText="Music Achievements"
            animationDelay={500}
            projectType={ProjectType.music}
          >
            <MusicAchievements />
          </ContentCard>
        </Box>
      </Grow>
    </Container>
  );
};

export default About;
