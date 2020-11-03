import React from "react";
import { Button } from "../ButtonElements";
import { Subtitle } from "./InfoElements";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  TeckStackHeader,
  TechStack,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

import Iframe from "react-iframe";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  teckStackHeader,
  teckStack,
  buttonLabel,
  img,
  url,
  alt,
  primary,
  dark,
  dark2,
}) => {
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
                <TeckStackHeader darkText={darkText}>
                  {teckStackHeader}
                </TeckStackHeader>
                <TechStack darkText={darkText}>{teckStack}</TechStack>

                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {img && <Img src={img} alt={alt} />}{" "}
                {url && (
                  <Iframe
                    url={url}
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />
                )}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
