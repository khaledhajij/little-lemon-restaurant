import React from "react";
import Logo from "../images/icons_assets/Logo.svg";
import Humberger from "../images/icons_assets/🦆 icon _hamburger menu.svg";
const NavBar = () => {
  const navElements = [
    "Home",
    "About",
    "Menu",
    "Reservation",
    "Order Online",
    "Login",
  ];
  return (
    <div className="navbar myContainer">
      <img src={Logo} alt="" />
      <img src={Humberger} className="humberger" alt="" />
      <ul>
        <li>
          <img src={Logo} alt="" />
        </li>
        {navElements.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
