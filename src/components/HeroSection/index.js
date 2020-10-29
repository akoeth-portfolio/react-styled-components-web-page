import React from "react";
import Video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroB>
        <VideoBg autoplay loop muted src={video} type="video/mp4" />
      </HeroB>
    </HeroContainer>
  );
};

export default HeroSection;
