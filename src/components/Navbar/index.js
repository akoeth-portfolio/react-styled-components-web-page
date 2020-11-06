import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [renderNavbar, setRenderNavbar] = useState(true);

  const [navbarTransparency, setNavbarTransparency] = useState(false);

  // if screen is in mobile landscape mode navbar is transparent, disappears on scroll down and reappears on scroll up
  // on scroll to topmost postion navbar is opaque
  window.onscroll = function (e) {
    if (window.screen.width >= 598 && window.screen.width <= 768) {
      window.scrollY <= 100
        ? setNavbarTransparency(false)
        : setNavbarTransparency(true);
      setRenderNavbar(this.oldScroll > this.scrollY);
      this.oldScroll = this.scrollY;
    } else {
      setRenderNavbar(true);
      setNavbarTransparency(false);
    }
  };

  const toggleHome = () => scroll.scrollToTop();

  return (
    <>
      {renderNavbar && (
        <Nav id="nav" style={{ opacity: navbarTransparency ? "0.75" : "1" }}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              portfolio
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about_me"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="web_shop"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Web Shop
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="sliding_puzzle"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sliding Puzzle
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="tic_tac_toe"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Tic Tac Toe
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="blockchain"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Block Chain
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      )}
      ;
    </>
  );
};

export default Navbar;
