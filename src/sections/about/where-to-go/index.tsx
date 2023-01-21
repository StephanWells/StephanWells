import { Box, Typography } from "@mui/material";
import "./index.css";

const WhereToGo = () => {
  return (
    <Box className="where-to-go-container">
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        If you've read this far, chances are you're interested in my work to
        some degree. You can check the Projects tab to get a more detailed and
        comprehensive list of projects I've worked on. For business enquiries,
        such as custom music/video editing, use the form in the Contact tab to
        message me directly and I'll reply within a day.
      </Typography>
      <Typography display="block" component="span" sx={{ marginTop: "10px" }}>
        I'm hoping that some of the passion I put into my work is evident in
        what you've learnt so far about me. I consider myself a very driven,
        project-oriented person who, from a young age, has always loved the
        feeling of starting a piece of work, seeing it through to completion,
        and ending up with a result that I can say I'm proud of. Be sure to get
        in touch!
      </Typography>
    </Box>
  );
};

export default WhereToGo;
