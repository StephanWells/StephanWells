import { Box, Divider, Typography } from "@mui/material";
import "./index.css";

interface TestimonialProps {
  name: string;
  subtitle: string;
  quote: string;
}

const Testimonial = (props: TestimonialProps) => {
  return (
    <Box
      className="testimonial-card"
      sx={{ margin: "10px", padding: "10px 20px" }}
    >
      <Box>
        <Typography variant="body2" className="quote">
          <i>{props.quote}</i>
        </Typography>
        <Box className="name-container">
          <Divider />
          <Typography variant="h5" className="name">
            {props.name}
          </Typography>
          <Typography variant="subtitle2" className="subtitle">
            {props.subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
