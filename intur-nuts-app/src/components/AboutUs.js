import { Grid, Typography } from "@mui/material";
import React from "react";
import map from "../Assets/about-image.jpg";
import AOS from "aos";

const AboutUs = () => {
  AOS.init({
    duration: 600,
  });
  return (
    <div className="about-us-container">
      <p className="common-head" data-aos="fade-right">
        {" "}
        ABOUT US
      </p>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        // spacing={5}
      >
        <Grid className="gridAbout" item md={12} xs={12} sm={12}>
          <p className="paraAbout" data-aos="fade-right">
            {" "}
            A paragraph is a self-contained unit of discourse in writing dealing
            with a particular point or idea. A paragraph consists of one or more
            sentences. Though not required by the syntax of any language,
            paragraphs are usually an expected part of formal writing, used to
            organize longer prose.A paragraph is a self-contained unit of
            discourse in writing dealing with a particular point or idea. A
            paragraph consists of one or more sentences. Though not required by
            the syntax of any language, paragraphs are usually an expected part
            of formal writing, used to organize longer prose.A paragraph is a
            self-contained unit of discourse in writing dealing with a
            particular point or idea. A paragraph consists of one or more
            sentences. Though not required by the syntax of any language,
            paragraphs are usually an expected part of formal writing, used to
            organize longer prose.
          </p>{" "}
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutUs;
