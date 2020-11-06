import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ButtonElements";
import { Subtitle } from "./InfoElements";
import { useHistory } from "react-router-dom";
import { doStuff } from "./aux";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Spinner,
  TextWrapper,
  TopLine,
  Heading,
  TeckStackHeader,
  TechStack,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";

import Iframe from "react-iframe";

const InfoSection = ({
  lightBg,
  id,
  className,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  teckStackHeader,
  teckStack,
  buttonLabel,
  buttonTarget,
  buttonExternalTarget,
  img,
  url,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const [renderIframe, setRenderIframe] = useState(false);

  const refEl = useRef(null);

  const HandleOnLoad = () => {
    setRenderIframe(true);
    // useRef hook grabs parent element of iframe (can not grab iframe directly bc its rendered conditionaly)
    // access child element (i.e. iframe) by current.children[1]
    // send message to iframe content (webshop) so it hides scroll bars
    if (refEl.current)
      refEl.current.children[1].contentWindow.postMessage("iframe", "*");
  };

  let history = useHistory();

  const handleClick = () => {
    buttonExternalTarget
      ? window.open(buttonExternalTarget, "_blank")
      : history.push(`${buttonTarget}`);
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
                <TeckStackHeader darkText={darkText}>
                  {teckStackHeader}
                </TeckStackHeader>
                <TechStack darkText={darkText}>{teckStack}</TechStack>

                <BtnWrap>
                  {buttonExternalTarget ? (
                    <Button
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      onClick={() => handleClick()}
                    >
                      {" "}
                      {buttonLabel}
                    </Button>
                  ) : (
                    <NavBtn>
                      <NavBtnLink
                        to="web_shop"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                      >
                        {buttonLabel}
                      </NavBtnLink>
                    </NavBtn>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap ref={id === "web_shop" ? refEl : null}>
                {img && <Img src={img} alt={alt} />}{" "}
                {url && !renderIframe && (
                  <Spinner>
                    {" "}
                    <i
                      className="fa fa-cog fa-spin"
                      style={{ fontSize: "10rem" }}
                    />
                  </Spinner>
                )}
                {url && (
                  <Iframe
                    url={url}
                    width="100%"
                    height={
                      className === "tic_tac_toe_class" ? "550px" : "450px"
                    }
                    id={id}
                    className={className}
                    display="initial"
                    position="relative"
                    onLoad={HandleOnLoad}
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
