import "./Products.css";
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
import services_Data from "./service_data";

const Products = () => {
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
      <h2
        data-aos="fade-right"
        className="common-head"
        style={{ marginBottom: 20 }}
      >
        PRODUCTS
      </h2>{" "}
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showDots={false}
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {services_Data.map((item) => (
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
                className="service-card"
              >
                <CardActionArea onClick={() => cardAction(item?.id)}>
                  <CardMedia
                    data-aos="fade-right"
                    component="img"
                    height="400"
                    width="350"
                    style={{ borderRadius: 20 }}
                    image={item?.image}
                  />

                  <CardContent>
                    <Typography
                      data-aos="fade-right"
                      style={{
                        color: "#000000",
                        fontSize: 24,
                        fontWeight: 600,
                      }}
                      variant="h5"
                      component="div"
                    >
                      {item?.name}
                    </Typography>
                    <Typography
                      data-aos="fade-right"
                      style={{
                        color: "#000000",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {item?.discription.length < 100
                        ? item?.discription
                        : `${item?.discription.substring(0, 200) + "..."}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  );
};
export default Products;
