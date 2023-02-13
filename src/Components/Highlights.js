import React from "react";
import { specials } from "../Data/HighlightsData";

const Highlights = () => {
  const Card = (props) => {
    return (
      <div className="card">
        <img src={props.img} alt="" />
        <div>
          <div className="title-price">
            <p className="title">{props.title}</p>
            <p className="price">{props.price}</p>
          </div>
          <p className="description">{props.description}</p>
          <p>Order a delivery</p>
        </div>
      </div>
    );
  };
  return (
    <div className="Highlights">
      <div className="header myContainer">
        <p>Specials</p>
        <button className="btn">Online Menu</button>
      </div>
      <div className="cards myContainer">
        {specials.map((spcl) => (
          <Card {...spcl} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
