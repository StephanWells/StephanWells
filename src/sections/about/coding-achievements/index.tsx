import { Box, Typography } from "@mui/material";
import ImageWrapper from "../../../component/image-wrapper";
import LinkButton from "../../../component/link-button";
import { projectTypeColours } from "../../../constants/uiConstants";
import RiftImage from "../../../assets/images/rift.png";
import SpreadsheetImage from "../../../assets/images/spreadsheet.png";
import "./index.css";

const CodingAchievements = () => {
  return (
    <Box className="coding-achievements-container">
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        On the{" "}
        <Typography color={projectTypeColours.code} display="inline">
          <b>coding</b>
        </Typography>{" "}
        side, most of my achievements lie in academia or in my professional
        career. I received my Bachelor's degree in{" "}
        <LinkButton
          href="https://www.um.edu.mt/ict/ai"
          tooltip="University of Malta"
          caption="Artificial Intelligence"
        />
        , graduating among the top in my class with an upper second, and I
        received my Master's degree in{" "}
        <LinkButton
          href="https://www.uu.nl/en/masters/game-and-media-technology"
          tooltip="Utrecht University"
          caption="Game & Media Technology"
        />
        , graduating with a cum laude. These courses don't just look pretty on
        the CV but they were both very practical courses that allowed me to get
        my hands dirty implementing a lot of techniques used in the industry,
        from{" "}
        <Typography color={"primary"} display="inline">
          <b>machine learning</b>
        </Typography>{" "}
        and{" "}
        <Typography color={"primary"} display="inline">
          <b>game development practices</b>
        </Typography>{" "}
        to even low-level coding assignments like implementing{" "}
        <Typography color={"primary"} display="inline">
          <b>data structures</b>
        </Typography>{" "}
        or{" "}
        <Typography color={"primary"} display="inline">
          <b>optimising C++ code</b>
        </Typography>
        .
      </Typography>{" "}
      <ImageWrapper
        src={RiftImage}
        caption="Rift, one of the games I co-developed during my bachelor's course"
      />
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        Between my two university courses, I took a year off where I worked as
        an IT / software development intern at
        <LinkButton
          href="https://bde-ltd.com/"
          tooltip="BD Electronics Ltd."
          caption="BD Electronics"
        />
        . Most of the work there was providing internal IT support to employees
        (anything from "my monitor isn't working!" to "please fix my spreadsheet
        formula!") and extending functionality of existing company software. My
        second job, where I am still working as we speak, is working as a
        software engineer at{" "}
        <LinkButton
          href="https://epam.com/"
          tooltip="EPAM Systems, Inc."
          caption="EPAM"
        />
        . This is where the bulk of my industry experience and exposure to
        development best practices lies, such as proficiency with{" "}
        <Typography color={"primary"} display="inline">
          <b>Git</b>
        </Typography>
        ,{" "}
        <Typography color={"primary"} display="inline">
          <b>Agile methodology</b>
        </Typography>
        ,{" "}
        <Typography color={"primary"} display="inline">
          <b>CI/CD pipelines</b>
        </Typography>
        , etc.
      </Typography>
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        Outside of work and studies, I've always enjoyed squeezing my coding
        skills into my passion for video games. A notable highlight here is
        coding work I've done related to the MMORPG{" "}
        <LinkButton
          href="https://www.guildwars2.com/"
          tooltip="Guild Wars 2"
          caption="Guild Wars 2"
        />
        , where, among other things, I coded a{" "}
        <Typography color={"primary"} display="inline">
          <b>RESTful API</b>
        </Typography>{" "}
        in{" "}
        <Typography color={"primary"} display="inline">
          <b>Typescript</b>
        </Typography>{" "}
        for a Discord bot used by a large Guild Wars 2 new-player-friendly
        community that I administrate and moderate. I also work quite a lot with{" "}
        <LinkButton
          href="https://www.google.com/sheets/about/"
          tooltip="Google Sheets"
          caption="Google Sheets"
        />
        , creating useful spreadsheets for the game's players with all sorts of
        bells and whistles via automation and scripts (the skills I got from my
        occasional spreadsheet support at my first job came in handy!).
      </Typography>
      <ImageWrapper
        src={SpreadsheetImage}
        caption="An example spreadsheet I created to keep track of game inventory"
      />
    </Box>
  );
};

export default CodingAchievements;
