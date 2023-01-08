import { Box, Divider, Typography } from "@mui/material";
import "./index.css";

interface TestimonialProps {
  name: string;
  subtitle: string;
  quote: string;
}

const Testimonial = (props: TestimonialProps) => {
  const size =
    props.quote.length > 250 ? 14 : props.quote.length > 70 ? 16 : 20;

  return (
    <Box className="testimonial-card">
      <Box>
        <Typography
          component="span"
          variant="body2"
          fontSize={size}
          className="quote"
        >
          <span className="quotation-mark">❝</span>
          <i>{props.quote}</i>
          <span className="quotation-mark">❞</span>
        </Typography>
        <Box className="name-container">
          <Divider className="divider" />
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
