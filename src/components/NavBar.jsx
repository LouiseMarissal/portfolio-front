import React from "react";
import { NavLink } from "react-router-dom";
import navCss from "./../CSS/NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
    </div>
  );
};
export default NavBar;
