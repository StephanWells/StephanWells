import {
  Backdrop,
  Divider,
  IconButton,
  Theme,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "mui-image";
import { useState } from "react";
import "./index.css";

interface ImageWrapperProps {
  caption: string;
  src: string;
}

const ImageWrapper = (props: ImageWrapperProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "visible";
    setOpen(false);
  };

  return (
    <Box className="image-wrapper-container">
      <IconButton onClick={handleOpen}>
        <Image
          src={props.src}
          duration={1500}
          title={props.caption}
          alt={props.caption}
          style={{ maxWidth: "400px" }}
          className="image"
          shift="bottom"
          shiftDuration={1500}
          distance="10px"
        />
      </IconButton>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <Image
          src={props.src}
          title={props.caption}
          alt={props.caption}
          style={{ maxWidth: "66vw", height: "auto" }}
        />
      </Backdrop>

      <Divider className="divider" />
      <Typography variant="subtitle2">{props.caption}</Typography>
    </Box>
  );
};

export default ImageWrapper;
