import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  LegalContainer,
  ContacContainer,
  Email,
  Header,
  LegalLink,
  SocialContainer,
  SocialIcon,
} from "./FooterElements";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { ImXing } from "react-icons/im";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <SocialContainer>
          <Header>SOCIAL</Header>
          <div style={{ display: "flex" }}>
            <SocialIcon>
              <a
                id="linked_in_link"
                href="https://www.linkedin.com/in/andreas-k%C3%B6th-a8b063200/"
                target="_blank"
              >
                <RiLinkedinBoxFill style={{ color: "white" }} />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                id="xing_link"
                href="https://www.xing.com/profile/Andreas_Koeth2/cv"
                target="_blank"
                rel="noreferrer"
              >
                <ImXing style={{ color: "white", paddingLeft: "0.5rem" }} />
              </a>
            </SocialIcon>
          </div>
        </SocialContainer>
        <ContacContainer>
          <Header>CONTACT</Header>
          <Email>andreas_koeth@gmx.de</Email>
        </ContacContainer>
        <LegalContainer>
          <Header>LEGAL</Header>
          <LegalLink to={"/privacy_policy"}>Privacy Policy</LegalLink>
          <LegalLink to={"/legal_notice"}>Legal Notice</LegalLink>
        </LegalContainer>
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;
