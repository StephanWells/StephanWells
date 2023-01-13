import { Box, Divider, Typography } from "@mui/material";
import "./index.css";

interface YouTubeEmbedProps {
  embedId: string;
  caption: string;
}

const YouTubeEmbed = (props: YouTubeEmbedProps) => {
  return (
    <>
      <Box className="video-responsive">
        <iframe
          src={`https://www.youtube.com/embed/${props.embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Box>
      <Box className="caption-container">
        <Divider className="divider" />
        <Typography variant="subtitle2" className="caption">
          {props.caption}
        </Typography>
      </Box>
    </>
  );
};

export default YouTubeEmbed;
