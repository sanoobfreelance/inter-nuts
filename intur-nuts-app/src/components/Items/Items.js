import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import items_Data from "./ItemsData";

const Items = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const cardAction = (id) => {
    localStorage.setItem("service_id", id);
  };
  return (
    <div className="service-card-container">
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showDots={false}
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={14000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items_Data.map((item) => (
          <Grid
            spacing={{ xs: 4, md: 6 }}
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item key={item?.id}>
              <Card
                style={{ borderTopLeftRadius: 23, borderTopRightRadius: 23 }}
                // className="service-card"
              >
                <CardActionArea onClick={() => cardAction(item?.id)}>
                  <video
                    src={item.image}
                    width="100%"
                    height="500"
                    controls="controls"
                    autoplay="true"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  );
};
export default Items;
