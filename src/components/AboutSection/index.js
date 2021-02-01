import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

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
  GitHubLink,
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
  buttonLabel,
  img,
  alt,
  gitHubLinkTarget,
}) => {
  const [hover, setHover] = useState(false);

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
                  "Hi, I'm Andreas. A geologist turned full stack web developer,
                  I am fully immersed in building web applications. This webpage
                  showcases my work so far. To see the source code feel free to
                  visit my{" "}
                  <GitHubLink
                    href={gitHubLinkTarget}
                    target="_blank"
                    darkText={darkText}
                  >
                    <FaGithub />
                    &nbsp;GitHub Repository.
                  </GitHubLink>{" "}
                  <br></br>
                  My main focus is JavaScript and the MERN stack. I never stop
                  learning and building and every new project is a much welcome
                  challenge to be tackeled with enthusiasm and in a goal-driven
                  and target-oriented fashion."
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
