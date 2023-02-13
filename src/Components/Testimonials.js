import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TestimonialsData } from "../Data/TestimonialsData";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Testimonial = (props) => {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<FontAwesomeIcon icon={faStar}/>)
  }
  return (
    <div className="testimonial">
      <div className="rating">
        <p>Rating</p>
        <p className="rating-value">
          {stars}
        </p>
      </div>
      <div className="img-name">
        <img src={props.img} alt="" />
        <p>{props.name}</p>
      </div>
      <div className="review-text">{props.text}</div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <p className="title">Testimonials</p>
      <div className="myContainer">
        <div className="Testimonials-cards">
          {TestimonialsData.map((el) => (
            <Testimonial {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
