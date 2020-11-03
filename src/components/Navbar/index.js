import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">portfolio</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="web_shop">Web Shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="sliding_puzzle">Sliding Puzzle</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="tic_tac_toe">Tic Tac Toe</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blockchain">Block Chain</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>{" "}
    </>
  );
};

export default Navbar;
