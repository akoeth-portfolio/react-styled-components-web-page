import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <Link to={"/privacy_policy"}>Privacy Policy</Link>
      <Link to={"/legal_notice"}>Legal Notice</Link>
    </FooterContainer>
  );
};

export default Footer;
