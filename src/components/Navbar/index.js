import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const img = require("../../images/Logo2_bearb.png").default;
  const alt = "logo";

  // if screen is in mobile landscape mode, navbar is transparent and disappears on scroll down and reappears on scroll up
  // on scroll to topmost postion navbar is opaque
  const [renderNavbar, setRenderNavbar] = useState(true);

  const [navbarTransparency, setNavbarTransparency] = useState(false);

  window.onscroll = function (e) {
    if (
      window.screen.width >= 598 &&
      window.screen.width <= 768 &&
      window.screen.width > window.screen.height
    ) {
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

  // sets offset scroll to section in accordance with screen width
  const [scrollOffset, setScrollOffset] = useState(-80);

  useEffect(() => {
    console.log(window.screen.width);
    if (window.screen.width >= 768 && window.screen.width <= 992)
      setScrollOffset(-30);

    if (window.screen.width > 1200) setScrollOffset(-40);
  }, []);

  // if click on portfolio in navbar scroll all the way up to top of page
  const toggleHome = () => scroll.scrollToTop();

  return (
    <>
      {renderNavbar && (
        <Nav id="nav" style={{ opacity: navbarTransparency ? "0.75" : "1" }}>
          <NavLogoImg src={img} alt={alt}></NavLogoImg>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              portfolio
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu id="nav_menu">
              <NavItem>
                <NavLinks
                  to="about_me"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={scrollOffset}
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
                  offset={scrollOffset}
                >
                  Web Shop
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="crypto_portfolio_viewer"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={scrollOffset}
                >
                  Crypto Viewer
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="tic_tac_toe"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={scrollOffset}
                >
                  Tic Tac Toe
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="sliding_puzzle"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={scrollOffset}
                >
                  Sliding Puzzle
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="blockchain"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={scrollOffset}
                >
                  Block Chain
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={scrollOffset}
                  style={{ fontWeight: "bold" }}
                >
                  Contact{" "}
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
