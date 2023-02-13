import React from "react";
import restaurant from "../images/icons_assets/restaurant.jpg";
import M_AA from "../images/icons_assets/Mario and Adrian A.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="myContainer">
        <div className="text">
          <p className="title">Little Lemon</p>
          <p className="city">Chicago</p>
          <p className="paragraph">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="images">
          <img src={restaurant} alt="" />
          <img src={M_AA} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
