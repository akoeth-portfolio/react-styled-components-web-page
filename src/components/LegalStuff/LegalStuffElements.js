import styled from "styled-components";

export const TextWrapper = styled.div`
  font-size: 0.75em;
  text-align: justify;
  margin-top: 6rem;

  @media only screen and (min-width: 600px) {
    margin-top: 3rem;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 0rem;
  }
`;
