import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <FooterLink to="/about">About Me</FooterLink>
                <FooterLink to="/projects">Projects</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
