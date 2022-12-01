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
            These are very tasty, crunchy, and spicy peanuts which are coated
            with spices and warming spice blend and thus made so very tasty. The
            taste is due to its coating which consists of Fried Gram Flour,
            Peanuts, Rice Flour, Edible Oil, Red Chilli Powder and warming spice
            blend (Garam Masala). This snack has always been an all-time
            favorite of almost many Indians of any age, crunching and munching
            it as a side dish or with any beverage, drink, or with tea or
            coffee. One even has this as an all-time likable pastime snack at
            any time of the day. The most peculiar likable feature of this
            coated peanut snack is that one can keep munching it on and on even
            while watching a movie or even during some fun time moments with
            family or friends. This mixture has a shelf life of about 6 months
            and must be stored in airtight containers and is available in 100
            grams packing.
            <br />
            Fully automatic machines used in the making process which ensured no
            hand touch so that highly hygienic and sorted quality ingredients
            ensures high quality product.
            <br />
            Peanuts provides good fats. They can boost up your productivity and
            reduces chances of stroke. They act as antioxidants. Protects skin
            and provide active vitamins.They reduces the risk of weight gain.
          </p>{" "}
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutUs;
