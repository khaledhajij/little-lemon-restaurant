import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/icons_assets/restauranfood.jpg";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="myContainer">
        <div>
          <h1>Little Lemon</h1>
          <h5>Chicago</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            dolorum sequi nam. Delectus reiciendis accusamus corporis beatae
            ullam magni esse eveniet eos perspiciatis nam, architecto
            repellendus eum expedita, itaque qui?
          </p>
          <Link to="/book-a-table">
            <button className="btn btn-primary">Reverse a Table</button>
          </Link>
        </div>
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
