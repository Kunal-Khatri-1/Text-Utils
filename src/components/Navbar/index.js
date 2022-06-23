import React from "react";
import {
  Nav,
  NavWrapper,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  RightNavDiv
} from "./NavbarElements";
import logo from "../../images/logo/logo.png";
import Toggle from "./DMToggleBtn/index";
import { useRef } from "react";

const Navbar = () => {
  const navMenu = useRef(null);
  const toggleDarkModeDiv = useRef(null);

  let navShow = false;
  const funcShowNav = () => {
    navShow = !navShow;
    console.log(navShow, "clicked")
    if (navShow) {
      navMenu.current.classList.add("show")
      toggleDarkModeDiv.current.classList.add("show")

      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
    }
    else{
      navMenu.current.classList.remove("show")
      toggleDarkModeDiv.current.classList.remove("show")

      document.body.style.height = "auto"
      document.body.style.overflow = "auto"
    }
  }
  return (
    <>
      <Nav>
        <NavWrapper className="wrapper">
          <NavLink to="/" id="home">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "100%",
              }}
            />
          </NavLink>
          <Bars onClick={funcShowNav}/>
          <NavMenu ref={navMenu}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            <NavLink to="/sign-up">Sign up</NavLink>
            <NavBtn>
              <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
            </NavBtn>
          </NavMenu>
          <RightNavDiv ref={toggleDarkModeDiv}>
            <Toggle />
          </RightNavDiv>
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
