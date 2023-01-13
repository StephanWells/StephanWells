import { Box, Typography } from "@mui/material";
import ImageWrapper from "../../../component/image-wrapper";
import LinkButton from "../../../component/link-button";
import YouTubeEmbed from "../../../component/youtube-embed";
import { projectTypeColours } from "../../../constants/uiConstants";
import "./index.css";

const VideoAchievements = () => {
  return (
    <Box className="video-achievements-container">
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        On the{" "}
        <Typography color={projectTypeColours.video} display="inline">
          <b>video</b>
        </Typography>{" "}
        side, despite this being a relatively new endeavour for me, I've pumped
        out a lot of video content, almost exclusively gaming-related. Much of
        it was funnelled into a fun{" "}
        <LinkButton
          href="https://www.youtube.com/@afkduringcampfire"
          tooltip="YouTube"
          caption="YouTube channel"
        />{" "}
        that I created to showcase heavily-edited amusing moments I experience
        with my friends in the mulitplayer horror game{" "}
        <LinkButton
          href="https://www.deadbydaylight.com/"
          tooltip="Dead By Daylight"
          caption="Dead By Daylight"
        />{" "}
        . This channel swiftly garnered thousands of subscribers, with many
        comments praising the video editing and production value.
      </Typography>
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        One other large video editing project was a video I created as a
        visualisation for an arrangement I and a vocalist friend, Darren, worked
        on of the track
        <LinkButton
          href="https://www.youtube.com/watch?v=23g5HBOg3Ic"
          tooltip="YouTube"
          caption="Celestial"
        />{" "}
        by Ed Sheeran, where I combined a sketchy watercolor art style from our
        talented artist with colourful, pixelated video-game-esque elements.
        This ended up being a massive project that took tens of hours, a RAM
        upgrade, and an arduous rendering process to complete!
      </Typography>
      <YouTubeEmbed
        embedId="6DDCsHrN884"
        caption="Celestial arrangement by me, featuring Darren on vocals"
      />
    </Box>
  );
};

export default VideoAchievements;
