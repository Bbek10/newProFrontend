import React from "react";
import Slider from "react-slick";
import "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Company.css";

const Company = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mainContainer">
      <h2>Our Brands</h2>
      <Slider {...settings}>
        <div className="container">
          <img
            alt="#"
            src="https://res.cloudinary.com/dxlv7ceot/image/upload/v1674757932/companies/shua_logo_yxa3rk.png"
          />
        </div>
        <div className="container">
          <img
            alt="#"
            src="https://res.cloudinary.com/dxlv7ceot/image/upload/v1674757368/companies/xterra-fitness-vector-logo_piztdy.png"
          />
        </div>
        <div className="container">
          <img
            alt="#"
            src="https://res.cloudinary.com/dxlv7ceot/image/upload/v1674757933/companies/miracle_fitness_ko_logo_pyfg42.png"
          />
        </div>
        <div className="container">
          <img
            alt="#"
            src="https://res.cloudinary.com/dxlv7ceot/image/upload/v1674757932/companies/spirit_logo_g7qkop.jpg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Company;
