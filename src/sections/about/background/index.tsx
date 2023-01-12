import { Box, Typography } from "@mui/material";
import LinkButton from "../../../component/link-button";
import NewgroundsImage from "../../../assets/images/newgrounds.png";
import TetrisImage from "../../../assets/images/tetris.jpg";
import "./index.css";
import ImageWrapper from "../../../component/image-wrapper";

const Background = () => {
  return (
    <Box className="background-container">
      <Typography display="block" component="span">
        My answer to "Where are you from?" is longer than it has any right to
        be. I was born in England to an English father and Maltese mother and
        moved to the Mediterranean island of{" "}
        <Typography color={"primary"} display="inline">
          <b>Malta</b>
        </Typography>{" "}
        when I was a few months old, where I've lived and worked for most of my
        life.
      </Typography>{" "}
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        From a young age, I was already dipping my toes in creativity, writing{" "}
        <Typography color={"primary"} display="inline">
          <b>short books</b>
        </Typography>{" "}
        (complete with the most cheesy mid-2000s Word Art you can imagine!). My
        budding writing career was all downhill from there, though, because
        music production quickly took the spotlight when writing "theme songs"
        for my books seemed like a fun idea to my younger self's excitable mind.
      </Typography>{" "}
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        At age 9, my parents bought me a little, three-octave toy keyboard and I
        took up{" "}
        <Typography color={"primary"} display="inline">
          <b>piano lessons</b>
        </Typography>
        , eventually transitioning to a proper piano. A couple of years later, I
        discovered the website{" "}
        <LinkButton
          href="https://www.newgrounds.com/"
          tooltip="Newgrounds: Everything by Everyone"
          caption="Newgrounds"
        />{" "}
        which I attribute a lot of my creative drive to. It was through that
        website that I realised that you don't have to be in a band or have a
        professional background to start making music - all you need is the
        right software and the motivation to learn. I downloaded the fantastic
        DAW{" "}
        <LinkButton
          href="https://www.image-line.com/"
          tooltip="Image-Line"
          caption="FL Studio"
        />{" "}
        and self-taught my way to proficiency.
      </Typography>
      <ImageWrapper
        src={NewgroundsImage}
        caption="Newgrounds, as it appeared in 2007. Source: Wikigrounds"
      />
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        In the meantime, at school I was developing what would eventually be my
        professional career: coding. At 13 years old,{" "}
        <Typography color={"primary"} display="inline">
          <b>Pascal</b>
        </Typography>{" "}
        would become my first ever programming experience, a language that is no
        doubt barely in use today, but it served as a great introduction to the
        world of software development and computer science. Right from the get
        go, it appealed perfectly to my problem-solving nature.
      </Typography>
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        With video games being a big passion of mine, throughout my early years
        of learning programming, I was always trying to incorporate{" "}
        <Typography color={"primary"} display="inline">
          <b>game development</b>
        </Typography>{" "}
        into it, however unsuited Pascal was for that endeavour. My biggest
        project at age 15 was a{" "}
        <Typography color={"primary"} display="inline">
          <b>Tetris</b>
        </Typography>{" "}
        clone that runs on the Turbo Pascal CLI terminal, where, without
        external resources and through much trial and error, I managed to
        implement core game development concepts like a game loop, collision,
        and state control.
      </Typography>
      <ImageWrapper
        src={TetrisImage}
        caption="CLI Tetris (not mine). Source: A. Pajitnov & V. Gerasimov"
      />
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        Now we have to fast forward a bit, because my interest in{" "}
        <Typography color={"primary"} display="inline">
          <b>video editing</b>
        </Typography>{" "}
        developed much more recently at age 26. Many fun and memorable moments
        playing video games with friends of mine encouraged me to learn how to
        edit those video highlights into fun clips to share and rewatch. I
        bought the industry-standard{" "}
        <LinkButton
          href="https://www.blackmagicdesign.com/au/products/davinciresolve"
          tooltip="Blackmagic"
          caption="DaVinci Resolve"
        />{" "}
        and soon realised that music production skills transfer over very well
        to video editing, quickly teaching myself advanced compositing,
        rotoscoping, text & image manipulation, colour grading, and other video
        editing techniques with the help of YouTube tutorials.
      </Typography>
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        Below you'll find some notable achievements and projects I've worked on.
        For a more comprehensive and detailed list of projects, check out the
        Projects tab!
      </Typography>
    </Box>
  );
};

export default Background;
