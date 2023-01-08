import { Box, BoxProps, styled, SvgIcon } from "@mui/material";
import "./index.css";

interface CircleIconProps {
  icon: React.FunctionComponent;
}

const CircleIcon = (props: CircleIconProps) => {
  const StyledBox = styled(({ className, ...props }: BoxProps) => (
    <Box {...props} className={className} />
  ))({
    backgroundColor: "rgb(44, 46, 58, 1)",
    borderRadius: "50%",
  });

  return (
    <StyledBox className="circle-icon">
      <SvgIcon component={props.icon} className="inner-icon" />
    </StyledBox>
  );
};

export default CircleIcon;
