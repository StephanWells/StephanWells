import { Typography } from "@mui/material";
import { experienceYears } from "../../../../../constants/uiConstants";
import LinkButton from "../../../component/link-button";
import "./index.css";

const Introduction = () => {
  const year = new Date();
  return (
    <>
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
        caption="Game & Media Technology"
      />{" "}
      <Typography display="inline">and</Typography>{" "}
      <Typography display="inline" className="number-increment">
        <b>{year.getFullYear() - experienceYears.code}</b>
      </Typography>{" "}
      <Typography display="inline">
        years of professional experience. I'm also a hobbyist musician with
      </Typography>{" "}
      <Typography display="inline" className="number-increment">
        <b>{year.getFullYear() - experienceYears.music}</b>
      </Typography>{" "}
      <Typography display="inline">
        years of experience composing music for personal projects, games,
        animations, and student films, and I'm a hobbyist video editor with
      </Typography>{" "}
      <Typography display="inline" className="number-increment">
        <b>{year.getFullYear() - experienceYears.video}</b>
      </Typography>{" "}
      <Typography display="inline">
        years of experience on personal projects.
      </Typography>
      <Typography display="block" sx={{ marginTop: "10px" }}>
        This is my corner of the web where you can browse through my portfolio
        of projects and learn a bit about me, my hobbies, and my professional
        background. Hit the links in the navigation bar above to explore further
        or contact me for any business enquiries!
      </Typography>
    </>
  );
};

export default Introduction;
