import { Box, Divider, Fade, Typography } from "@mui/material";
import CircleIcon from "../circle-icon";
import "./index.css";

interface ContentCardProps {
  icon: React.FunctionComponent;
  headerText: string;
  children?: React.ReactNode;
  animationDelay: number;
}

const ContentCard = (props: ContentCardProps) => {
  return (
    <Box className="content-card">
      <Fade in={true} style={{ transitionDelay: `${props.animationDelay}ms` }}>
        <Box>
          <CircleIcon icon={props.icon} />
          <Box className="colour-chip-primary" />
          <Typography variant="h3" component="span">
            {props.headerText}
          </Typography>
          <Divider component="div" className="divider" />
          {props.children}
        </Box>
      </Fade>
    </Box>
  );
};

export default ContentCard;
