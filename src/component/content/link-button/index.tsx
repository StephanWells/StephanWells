import {
  TooltipProps,
  Tooltip,
  tooltipClasses,
  styled,
  Link,
  SvgIcon,
} from "@mui/material";
import { ReactComponent as LinkIcon } from "../../../assets/ui-icon/link.svg";
import "./index.css";

interface LinkButtonProps {
  href: string;
  tooltip: string;
}

const LinkButton = (props: LinkButtonProps) => {
  const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <StyledTooltip title={props.tooltip} placement="top" color="primary">
      <Link
        color={"primary"}
        display="inline"
        href={props.href}
        target={"_blank"}
      >
        <SvgIcon
          className="link-icon"
          component={LinkIcon}
          // fontSize={"inherit"}
        />
      </Link>
    </StyledTooltip>
  );
};

export default LinkButton;
