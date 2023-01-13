import { Box, Typography } from "@mui/material";
import ImageWrapper from "../../../component/image-wrapper";
import LinkButton from "../../../component/link-button";
import { projectTypeColours } from "../../../constants/uiConstants";
import GeometryDashImage from "../../../assets/images/geometry-dash.png";
import HarmonyOfHeroesImage from "../../../assets/images/harmony-of-heroes.png";
import "./index.css";

const MusicAchievements = () => {
  return (
    <Box className="music-achievements-container">
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        On the{" "}
        <Typography color={projectTypeColours.music} display="inline">
          <b>music</b>
        </Typography>{" "}
        side, I'm happy to say I've been very busy over the years. As I was
        still learning the ropes, I made a lot of free music for people's
        projects (and got taken advantage of more than I'd like to admit, but
        hey, I had barely scraped past puberty at that point!). Eventually, I
        started getting more serious about music production. I invested in{" "}
        <LinkButton
          href="https://www.soundsonline.com/"
          tooltip="Soundsonline"
          caption="East/West"
        />{" "}
        orchestral samples, which was the first big bump in production value
        that my music experienced, and then worked on honing the craft,
        continuously learning new techniques, asking fellow musicians for
        advice, posting songs for feedback, and, ultimately, building up some
        freelancer work.
      </Typography>
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        One of the most major projects I've been involved in deserves a mention
        here: the wildly successful mobile rhythm game{" "}
        <LinkButton
          href="https://en.wikipedia.org/wiki/Geometry_Dash"
          tooltip="Wikipedia"
          caption="Geometry Dash"
        />
        . This started off as me offhandedly posting one of my techno tracks to
        a forum thread on Newgrounds looking for music for "an upcoming mobile
        game", and ended with one of my songs in one of the{" "}
        <Typography color={"primary"} display="inline">
          <b>most popular mobile games</b>
        </Typography>{" "}
        of all time. While I had been gaining a steady fanbase over time before
        this project, Geometry Dash exploded my popularity, and to a lot of
        people, for better and for worse, I'm known as "the musician for level 3
        in Geometry Dash".
      </Typography>
      <ImageWrapper
        src={GeometryDashImage}
        caption="Geometry Dash. Source: geometry-dash.io"
      />
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        That's only the tip of the iceberg though. Other notable achievements of
        mine include creating small soundtracks for multiple indie games,
        scoring a custom soundtrack for animations or short films (including one
        that was shown on national TV!), and getting involved as (assistant)
        music director in multiple large projects, one of my favourites being{" "}
        <LinkButton
          href="https://harmony.shinesparkers.net/album/harmony-of-heroes/"
          tooltip="Shinesparkers"
          caption="Harmony of Heroes"
        />
        , a gargantuan{" "}
        <LinkButton
          href="https://www.smashbros.com/"
          tooltip="Smash Bros"
          caption="Smash Bros"
        />{" "}
        music arrangement/tribute album involving hundreds of people and hours
        of high-quality music arrangements. Over here I was not only making
        music for the album but also managing people, providing feedback, and
        being involved in executive decisions on the album.
      </Typography>
      <ImageWrapper
        src={HarmonyOfHeroesImage}
        caption="Harmony of Heroes official album art"
      />
    </Box>
  );
};

export default MusicAchievements;
