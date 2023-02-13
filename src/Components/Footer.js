import React from "react";

const Footer = () => {
  const transformElement = (arr) => {
    return arr.map((ele) => <li>{ele.slice(0, 1) + ele.slice(1)}</li>);
  };

  const dormatNavigation = [
    "home",
    "about",
    "menu",
    "reservation",
    "order online",
    "login",
  ];
  const contact = ["address", "phone number", "email"].map(
    (ele) => ele.slice(0, 1) + ele.slice(1)
  );
  const socialML = ["facebook", "telegram", "youtube"].map(
    (ele) => ele.slice(0, 1) + ele.slice(1)
  );

  return (
    <div className="Footer">
      <div className="myContainer">
        <div className="navigation">
          <p>Dormat Navigation</p>
          <ul>{transformElement(dormatNavigation)}</ul>
        </div>
        <div className="contact">
          <p>Contact</p>
          <ul>{transformElement(contact)}</ul>
        </div>
        <div className="media-links">
          <p>Social Meida Links</p>
          <ul>{transformElement(socialML)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
