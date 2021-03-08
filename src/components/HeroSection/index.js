import React, { useState, useEffect } from "react";
import Video from "../../videos/video-orange.mp4";
import { ButtonLink } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (window.screen.width >= 600 && window.screen.width <= 768)
      setScrollOffset(0);

    if (window.screen.width >= 768 && window.screen.width <= 992)
      setScrollOffset(-30);

    if (window.screen.width > 1200) setScrollOffset(-80);
  }, []);

  const onHover = () => {
    setHover(!hover);
    console.log("setHover");
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
      </HeroBg>
      <HeroContent id="hero_content">
        <HeroH1>Portfolio Page</HeroH1>
        <HeroP>Welcome!</HeroP>
        <HeroP>Hit the button below and see what this is all about.</HeroP>
        <HeroBtnWrapper>
          <ButtonLink
            to="about_me"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={scrollOffset}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
