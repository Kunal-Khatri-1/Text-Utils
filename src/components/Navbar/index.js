import React, { useContext, useState } from "react";
import {
  Nav,
  NavWrapper,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../images/logo/logo.png";
import noteContext from "../../context/noteContext";
import Toggle from "./DMToggleBtn/index";

const Navbar = () => {
  const {darkMode, toggleDarkMode} = useContext(noteContext);
  return (
    <>
      <Nav mode={darkMode.toString()}>
        <NavWrapper className="wrapper">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "100%",
              }}
            />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/services" activeStyle>
              Services
            </NavLink>
            <NavLink to="/contact-us" activeStyle>
              Contact Us
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              Sign up
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
          </NavBtn>
        </NavWrapper>
        <Toggle toggled={darkMode} click={toggleDarkMode} />
      </Nav>
    </>
  );
};

export default Navbar;
