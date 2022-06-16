import React from "react";
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

import Toggle from "./DMToggleBtn/index";

const Navbar = () => {

  return (
    <>
      <Nav>
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
            <NavLink to="/about">
              About
            </NavLink>
            <NavLink to="/services">
              Services
            </NavLink>
            <NavLink to="/contact-us">
              Contact Us
            </NavLink>
            <NavLink to="/sign-up">
              Sign up
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
          </NavBtn>
        </NavWrapper>
        <Toggle />
      </Nav>
    </>
  );
};

export default Navbar;
