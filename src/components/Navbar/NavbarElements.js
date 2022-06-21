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

  &#home{
    padding: 0.5rem 0rem;
    margin-left: 36px;
    justify-content: flex-end;
  }
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
  flex-grow: 0.6;
  justify-content: center;

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

  & button {
    margin-left: 8px;
  }

  @media screen and (max-width: 760px) {
    position: absolute;
    top: 60px;
    left: 0;
    justify-content: space-evenly;
    width: 100vw;
    height: calc(100vh - 60px);
    background: #040912;
    flex-direction: column;
    font-size: 1.3rem;
    transform: translate(-100%);
    transition: transform 0.5s ease;
    
    &.show{
      left: 50vw;
      transform: translate(-50%);
    }
  }
`;

export const NavBtn = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background: none;

  @media screen and (max-width: 760px) {
    font-size: 1.3rem;
  }

`;

export const NavBtnLink = styled(Link)`
  width: 80px;
  font-size: 1rem;
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

export const RightNavDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 36px ;

  @media screen and (max-width: 760px) {
    position: absolute;
    top: 80px;
    right: 100vw;
    margin-right: 0px;
    transition: all 0.5s ease;
  }

  &.show{
      right: calc(20px);
    }
`