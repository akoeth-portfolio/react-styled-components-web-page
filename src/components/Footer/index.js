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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <SocialContainer>
          <Header>SOCIAL</Header>
          <SocialIcon>
            <RiLinkedinBoxFill />
          </SocialIcon>
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
