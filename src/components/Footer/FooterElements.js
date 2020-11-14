import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
  /* display: flex; */
`;

export const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Header = styled.h4`
  color: white;
  padding-bottom: 0.75rem;
`;

export const LegalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const LegalLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: white;
  padding-bottom: 0.5rem;
`;

export const ContacContainer = styled.div`
  padding: 2rem;
`;

export const Email = styled.div`
  color: white;
`;

export const SocialContainer = styled.div`
  padding: 2rem;
`;

export const SocialIcon = styled.div`
  font-size: 2em;
  color: white;
`;
