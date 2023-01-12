import { Box, Typography } from "@mui/material";
import "./index.css";

const Greeting = () => {
  return (
    <Box className="greeting-container">
      <Typography fontSize={17} variant="caption">
        Hey there! Thank you for dropping by. I thought I'd take some time to
        show how I got to the point I'm at today, what I'm currently up to, and
        what the future holds for me, so please allow me to talk about myself
        for a bit!
      </Typography>
    </Box>
  );
};

export default Greeting;
