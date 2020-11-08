import React, { useState } from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  Heading,
  BtnWrap,
  ImgWrap,
  Img,
} from "../InfoSection/InfoElements";

import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";

import { ArrowForward, ArrowRight } from "../HeroSection/HeroElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                <BtnWrap id="about_btn_wrap_desktop">
                  <NavBtn>
                    <NavBtnLink
                      to="web_shop"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                    >
                      {buttonLabel}&nbsp;
                      {hover ? <ArrowForward /> : <ArrowRight />}
                    </NavBtnLink>
                  </NavBtn>
                  )
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img id="info_section_image" src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
