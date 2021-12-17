import React, { useState, useEffect } from "react";
import Video from "../../videos/video-orange.mp4";
import { ButtonLink } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Img,
  // HeroH1,
  // HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

import { ImgWrap } from "../InfoSection/InfoElements";

const img = require("../../images/logo-4.png").default;
const alt = "logo";

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
        <ImgWrap id="image_wrapper">
          <Img id="info_section_image" src={img} alt={alt} />
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
              big={true}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </ButtonLink>
          </HeroBtnWrapper>
        </ImgWrap>
        {/* <HeroH1>Portfolio Page</HeroH1> */}
        {/* <HeroP>Welcome!</HeroP> */}
        {/* <HeroP>Hit the button below and see what this is all about.</HeroP> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
