import {
  Box,
  Divider,
  MenuItem,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import "./index.css";

interface ProjectTypeItemProps {
  icon: React.FunctionComponent;
  index: number;
  name: string;
  description: string;
  color: string;
  extraPadding?: string;
  handleMenuClick: (index: number) => void;
  setIndicatorColor: (value: string) => void;
}

const ProjectTypeItem = (props: ProjectTypeItemProps) => {
  return (
    <Box flexDirection="row">
      <MenuItem
        className="navbar-menu-item"
        onClick={() => {
          props.handleMenuClick(props.index);
          props.setIndicatorColor(props.color);
        }}
      >
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Stack direction="row" justifyContent="start">
            <SvgIcon
              className="navbar-menu-icon"
              component={props.icon}
              fontSize={"medium"}
              style={{ color: props.color, paddingTop: props.extraPadding }}
            />
            <Typography className="navbar-menu-name" variant="h6">
              {props.name}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="start">
            <Typography className="navbar-menu-description" variant="body2">
              {props.description}
            </Typography>
          </Stack>
        </Stack>
      </MenuItem>
    </Box>
  );
};

export default ProjectTypeItem;
