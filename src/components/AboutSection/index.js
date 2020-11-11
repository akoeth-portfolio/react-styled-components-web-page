import React, { useState, useEffect } from "react";

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

  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (window.screen.width >= 600 && window.screen.width <= 768)
      setScrollOffset(0);

    if (window.screen.width >= 768 && window.screen.width <= 992)
      setScrollOffset(60);

    if (window.screen.width > 1200) setScrollOffset(-80);
  }, []);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper id="info_wrapper">
          <InfoRow id="info_row" imgStart={imgStart}>
            <Column1 id="column_1">
              <TextWrapper id="text_wrapper">
                <TopLine id="top_line">{topLine}</TopLine>
                <Heading id="heading" lightText={lightText}>
                  {headLine}
                </Heading>
                <Subtitle id="subtitle" darkText={darkText}>
                  {description}
                </Subtitle>

                <BtnWrap id="about_btn_wrap_desktop">
                  <NavBtn>
                    <NavBtnLink
                      to="web_shop"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={0}
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
