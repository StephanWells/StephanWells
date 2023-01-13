import { Box, Container, Grow } from "@mui/material";
import { ReactComponent as FaceIcon } from "../../assets/circle-icon/face.svg";
import { ReactComponent as SproutIcon } from "../../assets/circle-icon/sprout.svg";
import { ReactComponent as CodeIcon } from "../../assets/ui-icon/code.svg";
import { ReactComponent as MusicIcon } from "../../assets/ui-icon/music.svg";
import { ReactComponent as VideoIcon } from "../../assets/ui-icon/video.svg";
import { ReactComponent as FastForwardIcon } from "../../assets/circle-icon/fast-forward.svg";
import ContentCard from "../../component/content-card";
import { tabState } from "../../definitions/tab-state";
import Background from "./background";
import Greeting from "./greeting";
import "./index.css";
import CodingAchievements from "./coding-achievements";
import ProjectType from "../../definitions/project-type";
import MusicAchievements from "./music-achievements";
import VideoAchievements from "./video-achievements";
import WhereToGo from "./where-to-go";

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
            extraIconPadding="2px 0 0 2px"
          >
            <MusicAchievements />
          </ContentCard>
        </Box>
      </Grow>
      <Grow
        in={props.tabState.value === 1}
        style={{ transformOrigin: "50% 0 0", transitionDelay: "400ms" }}
        timeout={600}
      >
        <Box>
          <ContentCard
            icon={VideoIcon}
            headerText="Video Achievements"
            animationDelay={600}
            projectType={ProjectType.video}
            extraIconPadding="3px 0 0 3px"
          >
            <VideoAchievements />
          </ContentCard>
        </Box>
      </Grow>
      <Grow
        in={props.tabState.value === 1}
        style={{ transformOrigin: "50% 0 0", transitionDelay: "400ms" }}
        timeout={600}
      >
        <Box>
          <ContentCard
            icon={FastForwardIcon}
            headerText="Where to go from here?"
            animationDelay={600}
          >
            <WhereToGo />
          </ContentCard>
        </Box>
      </Grow>
    </Container>
  );
};

export default About;
