import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%,
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)
    );
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  //   @media only screen and (min-width: 550px) and (max-width: 699px) and (orientation: landscape) {
  //     top: 4rem;
  //   }

  //   @media screen and (min-width: 768px) {
  //     top: 11rem;
  //   }

  //   @media screen and (min-width: 1300px) {
  //     top: 15rem;
  //   }
`;

export const HeroImageLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 45%;
  opacity: 0.25;
  position: absolute;
  top: 7rem;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
  }

  @media screen and (max-width: 1300px) {
    top: 5rem;
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    top: 5rem;
    width: 50%;
    opacity: 0.75;
  }

  @media screen and (max-width: 480px) {
    top: 10rem;
    width: 85%;
    opacity: 0.75;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  } ;
`;

export const HeroBtnWrapper = styled.div`
  position: absolute;
  /* margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center; */

  /* @media only screen and (min-width: 550px) and (max-width: 699px) and (orientation: landscape) {
    margin: 1rem;
  } */

  /* @media screen and (min-width: 1200px) {
    margin-top: 8rem;
  } */

  /* @media screen and (min-width: 1300px) {
    margin-top: 10rem;
  } */
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
