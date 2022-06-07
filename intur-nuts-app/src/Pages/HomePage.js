import React from "react";
import Footer from "../components/Footer";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products/Products";
import vidieo1 from "../Assets/vidieo1.mp4";
import Contact from "../components/Contact/Contact";
import Items from "../components/Items/Items";
const HomePage = () => {
  return (
    <div>
      <div className="dashboard">
        <Navbar />
        <video
          src={vidieo1}
          width="100%"
          height="500"
          className="home-vedio"
          controls="controls"
          autoplay="true"
        />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Items />
      </div>
      <div>
        <Contact />
      </div>
      <div id="contact-us">
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
