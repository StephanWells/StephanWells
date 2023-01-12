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
        , graduating with a cum laude.
      </Typography>{" "}
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        During these courses, I worked on various coding assignments, such as an
        automatic{" "}
        <Typography color={"primary"} display="inline">
          <b>song genre classifier</b>
        </Typography>{" "}
        in{" "}
        <Typography color={"primary"} display="inline">
          <b>MATLAB</b>
        </Typography>{" "}
        that uses a novel technique incorporating visual features from audio
        spectrograms, a{" "}
        <Typography color={"primary"} display="inline">
          <b>music annotation tool</b>
        </Typography>{" "}
        developed with{" "}
        <Typography color={"primary"} display="inline">
          <b>WPF</b>
        </Typography>{" "}
        used to aid musicology research via facilitating annotations of melodic
        patterns, multiple video games developed from scratch in{" "}
        <Typography color={"primary"} display="inline">
          <b>Unity</b>
        </Typography>
        , and various low-level coding assignments working with data structures
        and algorithms, written in{" "}
        <Typography color={"primary"} display="inline">
          <b>C</b>
        </Typography>
        ,{" "}
        <Typography color={"primary"} display="inline">
          <b>C++</b>
        </Typography>
        , and{" "}
        <Typography color={"primary"} display="inline">
          <b>Java</b>
        </Typography>
        .
      </Typography>
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
        . Despite being an internship, this was a fairly demanding job with its
        fair share of challenges. It involved writing software (in{" "}
        <Typography color={"primary"} display="inline">
          <b>Java</b>
        </Typography>
        ) to automate company processes, enforcing and designing company
        security policies, providing internal IT support to employees (anything
        from "my monitor isn't working!" to "please fix my spreadsheet
        formula!"), and extending functionality of existing company software.
      </Typography>
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        My second job, where I am still working as we speak, is working as a
        software engineer at{" "}
        <LinkButton
          href="https://epam.com/"
          tooltip="EPAM Systems, Inc."
          caption="EPAM"
        />
        . This is where the bulk of my industry experience and exposure to
        development best practices lies. Among many achivements, I became quite
        proficient with{" "}
        <Typography color={"primary"} display="inline">
          <b>Git</b>
        </Typography>
        , was exposed to{" "}
        <Typography color={"primary"} display="inline">
          <b>Agile methodology</b>
        </Typography>
        , learned about{" "}
        <Typography color={"primary"} display="inline">
          <b>CI/CD pipelines</b>
        </Typography>
        , worked heavily with{" "}
        <Typography color={"primary"} display="inline">
          <b>APIs and integration</b>
        </Typography>
        , and had my first proper exposure to{" "}
        <Typography color={"primary"} display="inline">
          <b>front-end development</b>
        </Typography>{" "}
        via{" "}
        <Typography color={"primary"} display="inline">
          <b>Typescript</b>
        </Typography>
        ,{" "}
        <Typography color={"primary"} display="inline">
          <b>CSS</b>
        </Typography>
        , and{" "}
        <Typography color={"primary"} display="inline">
          <b>React</b>
        </Typography>{" "}
        (which are the technologies I used in this very website!).
      </Typography>
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        Outside of work and studies, I've used my coding skills for all sorts of
        hobby projects, a number of which relate to integrations and services
        that revolve around the MMORPG{" "}
        <LinkButton
          href="https://www.guildwars2.com/"
          tooltip="Guild Wars 2"
          caption="Guild Wars 2"
        />
        . One such project was coding a{" "}
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
        , creating useful spreadsheets for the game's players that not only
        include advanced spreadsheet techniques such as complex formulae and
        data validation rules but also include macros/automation and deep
        integrations with the game's API.
      </Typography>
      <ImageWrapper
        src={SpreadsheetImage}
        caption="An example spreadsheet I created to keep track of game inventory"
      />
    </Box>
  );
};

export default CodingAchievements;
