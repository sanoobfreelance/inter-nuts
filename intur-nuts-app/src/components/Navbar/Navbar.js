import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import logo from "../../Assets/NavLogo.png";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import PhoneIphoneTwoToneIcon from "@mui/icons-material/PhoneIphoneTwoTone";
import AOS from "aos";
const Navbar = () => {
  AOS.init({
    duration: 600,
  });
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="topnav-container">
        <span
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
          className="mobNum"
        >
          <PhoneIphoneTwoToneIcon
            style={{ marginBottom: -5, marginRight: 3 }}
            fontSize="small"
            color="white"
          />
          +91 9188858666
        </span>
        <span
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="200"
          className="email-nav"
        >
          {" "}
          <EmailTwoToneIcon
            style={{ marginBottom: -5, marginRight: 5 }}
            color="white"
            fontSize="small"
          />
          internutzproducts@gmail.com
        </span>{" "}
      </div>
      <Container maxWidth="false">
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <a href="/">
                <img
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1200"
                  className="logo"
                  src={logo}
                ></img>
              </a>
            </div>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="option"
              onClick={closeMobileMenu}
            >
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>

            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="option"
              onClick={closeMobileMenu}
            >
              <a className="nav-links" href="#/our-services">
                Our Services
              </a>
            </li>

            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="option"
              onClick={closeMobileMenu}
            >
              <a className="nav-links" href="#/about-us">
                About Us
              </a>
            </li>

            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              className="option"
              onClick={closeMobileMenu}
            >
              <Link style={{ textDecoration: "none" }} to="/#contact-us">
                <a className="nav-links" href="#our-services">
                  {" "}
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
          <div className="mobile-view" onClick={handleClick}>
            {click ? (
              <Button fontSize="large" className="menu-icon">
                <CloseIcon color="black" />
              </Button>
            ) : (
              <Button fontSize="large" className="menu-icon">
                <ReadMoreIcon color="black" />
              </Button>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Navbar;
