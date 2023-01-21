import { Box, Divider, Fade, Typography, useTheme } from "@mui/material";
import CircleIconSmall from "../circle-icon/small";
import CircleIconLarge from "../circle-icon/large";
import "./index.css";
import ProjectType from "../../definitions/project-type";
import { projectTypeColours } from "../../constants/uiConstants";

interface ContentCardProps {
  icon?: React.FunctionComponent;
  largeIcon?: boolean;
  headerText?: string;
  children?: React.ReactNode;
  animationDelay: number;
  projectType?: ProjectType;
  extraIconPadding?: string;
  transparent?: boolean;
}

const ContentCard = (props: ContentCardProps) => {
  const theme = useTheme();
  return (
    <>
      <Box
        className="content-card"
        style={{
          marginTop: !props.icon ? "-35px" : props.largeIcon ? "100px" : "15px",
          backgroundColor: !props.transparent ? "rgb(44, 46, 58, 0.5)" : "",
        }}
      >
        <Fade
          in={true}
          style={{ transitionDelay: `${props.animationDelay}ms` }}
        >
          <Box>
            {!!props.icon && props.largeIcon && (
              <Box className="circle-icon-large-wrapper">
                <CircleIconLarge
                  icon={props.icon}
                  extraPadding={props.extraIconPadding}
                />
              </Box>
            )}
            <Box className="content-wrapper">
              {!!props.icon && !props.largeIcon && (
                <Box className="circle-icon-small-wrapper">
                  <CircleIconSmall
                    icon={props.icon}
                    extraPadding={props.extraIconPadding}
                  />
                </Box>
              )}
              {props.headerText && (
                <>
                  <Box
                    className="colour-chip-primary"
                    sx={{
                      backgroundColor: !!props.projectType
                        ? projectTypeColours[props.projectType]
                        : theme.palette.primary.main,
                    }}
                  />
                  <Typography variant="h3" component="span">
                    {props.headerText}
                  </Typography>
                  <Divider
                    component="div"
                    className="divider"
                    sx={{
                      backgroundColor: !!props.projectType
                        ? projectTypeColours[props.projectType]
                        : theme.palette.primary.main,
                    }}
                  />{" "}
                </>
              )}
              {props.children}
            </Box>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default ContentCard;
