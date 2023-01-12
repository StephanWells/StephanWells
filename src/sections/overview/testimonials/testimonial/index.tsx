import { Box, Divider, Typography } from "@mui/material";
import { projectTypeColours } from "../../../../constants/uiConstants";
import "./index.css";

interface TestimonialProps {
  name: string;
  subtitle: string;
  type: string;
  quote: string;
}

const Testimonial = (props: TestimonialProps) => {
  const size =
    props.quote.length > 300
      ? 14
      : props.quote.length > 150
      ? 15.5
      : props.quote.length > 70
      ? 18
      : 21;

  return (
    <Box className="testimonial-card">
      <Box>
        <Typography variant="body2" fontSize={size} className="quote">
          <span
            className="quotation-mark"
            style={{ color: projectTypeColours[props.type] }}
          >
            ❝
          </span>
          <i>{props.quote}</i>
          <span
            className="quotation-mark"
            style={{ color: projectTypeColours[props.type] }}
          >
            ❞
          </span>
        </Typography>
        <Box className="name-container">
          <Divider
            className="divider"
            style={{
              backgroundColor: projectTypeColours[props.type],
              opacity: 0.5,
            }}
          />
          <Typography
            variant="h5"
            className="name"
            style={{ color: projectTypeColours[props.type] }}
          >
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
