import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"
import logo from "../../images/logo/logo.png"

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
            <img 
              src= {logo} 
              alt="Logo"
              style={{
                height: "100%"
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
      </Nav>
    </>
  )
}

export default Navbar
