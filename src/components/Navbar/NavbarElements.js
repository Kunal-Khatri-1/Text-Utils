import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #0c1d39;
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media screen and (max-width: 760px) {
    width: auto;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  & ${NavLink}::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transition: transform 0.3s ease-out;
  }

  & ${NavLink}:hover::after {
    transform: scaleX(0.7);
  }

  & ${NavLink}.active {
    color: #15cdfc;
  }

  @media screen and (max-width: 760px) {
    display: none;
  }

  @media screen and (max-width: 1024px){
    flex-grow: 1;
    margin-left: 29px;
  }
`;

export const NavBtn = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background: none;

  @media screen and (max-width: 760px) {
    display: none;
  }

  @media screen and (max-width: 1024px){
    margin: 0 36px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 6px 12px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #256ce1;
  }
`;
