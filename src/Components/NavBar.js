import React from "react";
import Logo from '../images/icons_assets/Logo.svg'
import '../Styling/NavBar.css'
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
      <ul>
        <li><img src={Logo} alt="" /></li>
        {navElements.map(el => <li>{el}</li>)}
      </ul>
    </div>
  );
};

export default NavBar;
