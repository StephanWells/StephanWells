import { Box, Grid, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Testimonial from "./component/testimonial";
import "./index.css";
import items from "./testimonials.json";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const updateView = (windowDimensions: { width: number }) => {
  const itemsPerView =
    windowDimensions.width > 923 ? 3 : windowDimensions.width > 670 ? 2 : 1;
  const tempItems: number =
    items.length > itemsPerView ? itemsPerView : items.length;
  const sliderItems = [];

  for (let i = 0; i < items.length; i += tempItems) {
    if (i % tempItems === 0) {
      sliderItems.push(
        <Grid
          item
          container
          xs={12}
          spacing={0}
          alignItems="center"
          justifyContent="center"
          className="carousel-container"
          key={i}
        >
          {items.slice(i, i + tempItems).map((item, index) => {
            return (
              <Grid
                item
                key={index}
                xs={itemsPerView === 3 ? 4 : itemsPerView === 2 ? 6 : 12}
              >
                <Testimonial
                  name={item.name}
                  subtitle={item.subtitle}
                  quote={item.quote}
                />
              </Grid>
            );
          })}
        </Grid>
      );
    }
  }

  return sliderItems;
};

const Testimonials = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [sliderItems, setSliderItems] = useState(updateView(windowDimensions));

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSliderItems(updateView(windowDimensions));
  }, [windowDimensions]);

  const theme = useTheme();

  return (
    <Box>
      <Carousel
        autoPlay={false}
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            backgroundColor: "rgb(240, 240, 250, 0.3)",
            width: "25px",
            height: "100%",
            borderRadius: "11px",
            marginRight: "7px",
          },
        }}
        navButtonsWrapperProps={{
          style: {
            height: "81.5%",
            bottom: "47.8%",
            top: "unset",
          },
        }}
        indicatorIconButtonProps={{
          className: "test",
          style: {
            color: "rgb(255, 255, 255, 0.6)",
          },
        }}
        activeIndicatorIconButtonProps={{
          className: "test",
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            opacity: "0.45",
          },
        }}
        animation="slide"
        cycleNavigation
        duration={300}
        className="carousel"
      >
        {sliderItems}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
