import { Box, Container, Divider, Fade, Grow, Typography } from "@mui/material";
import { tabState } from "../../header/definitions/tab-state";
import "./index.css";

interface OverviewProps {
  tabState: tabState;
}

const Overview = (props: OverviewProps) => {
  return (
    <Grow
      in={props.tabState.value === 0}
      style={{ transformOrigin: "50% 0 0" }}
      timeout={600}
    >
      <Container maxWidth={"md"} className="overview-container">
        <Fade
          in={props.tabState.value === 0}
          style={{ transitionDelay: "300ms" }}
        >
          <Box>
            <Box className="colour-chip-primary" />
            <Typography variant="h3" component="span">
              Hello there!
            </Typography>
            <Divider component="div" className="divider" />
            <Typography component="span">
              Overview goes here Overview goes here Overview goes here Overview
              goes here Overview goes here Overview goes here Overview goes here
              Overview goes here Overview goes here Overview goes here Overview
              goes here Overview goes here
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Grow>
  );
};

export default Overview;
