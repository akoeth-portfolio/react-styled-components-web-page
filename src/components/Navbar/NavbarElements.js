import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: black;
  /* opacity: 0.75; */
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom-style: solid;
  border-bottom-color: white;
  border-bottom-width: 2px;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  /* padding: 0 24px; */
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  /* justify-self: flex-start; */
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
  padding-left: 0.5rem;
  /* width: 25% !important; */
`;

export const NavLogoImg = styled.img`
  width: 2rem;

  /* @media only screen and (max-width: 992px) {
    display: none;
  } */
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: point;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ff6a00;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(LinkS)`
  display: flex;
  align-items: center;
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff6a00;
    color: white;
  }
`;

export const LangContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  right: 7rem;
  width: 1rem;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
`;

export const LangImg = styled.img`
  width: 1.5em;
`;

export const LangName = styled.div`
  color: white;
`;
