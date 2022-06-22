import { Container, Grid, Typography } from "@mui/material";
import React from "react";
// import Logo from "../Assets/logo white.png";
import WifiCallingIcon from "@mui/icons-material/WifiCalling";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import PhoneIphoneTwoToneIcon from "@mui/icons-material/PhoneIphoneTwoTone";
import AOS from "aos";
export default function Footer() {
  AOS.init({
    duration: 500,
  });
  return (
    <div>
      <Container
        style={{ backgroundColor: "#211b1b", paddingBottom: 15 }}
        maxWidth="false"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={8}>
            <p className="footer-head">CONTACT US:</p>
            <a className="phonecall" href="tel:+919188858666">
              <WifiCallingIcon className="phone-icon" />
            </a>
            <a
              href="https://wa.me/+919188858666"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
            <p className="footer-para">
              {" "}
              <LocationOnTwoToneIcon
                style={{ marginTop: 7, marginRight: 5 }}
                fontSize="small"
              />
              inturnutz address, Suite 93A, palakkd, Kerala – 683561.
            </p>
            <span className="footer-para">
              <PhoneIphoneTwoToneIcon
                style={{ marginRight: 0, position: "relative", top: 5 }}
                fontSize="small"
              />{" "}
              +91 9188858666,
              <EmailTwoToneIcon
                style={{
                  marginRight: 5,

                  color: "white",
                  position: "relative",
                  top: 6,
                }}
                fontSize="small"
              />{" "}
              internutzproducts@gmail.com
            </span>{" "}
          </Grid>
          <Grid style={{ textAlign: "right" }} item xs={4}>
            <p className="footer-head">Follow Us:</p>
            <Typography>
              <a href="/">
                <InstagramIcon fontSize="small" style={{ color: "white" }} />
              </a>
              <a href="/">
                <FacebookIcon fontSize="small" style={{ color: "white" }} />
              </a>

              <a href="/">
                <TwitterIcon fontSize="small" style={{ color: "white" }} />
              </a>
              <a href="/">
                <LinkedInIcon fontSize="small" style={{ color: "white" }} />
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
