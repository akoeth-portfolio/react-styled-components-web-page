import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ButtonElements";
import { Subtitle } from "./InfoElements";
import { useHistory } from "react-router-dom";
import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { ImLoop2 } from "react-icons/im";

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
  ReloadBtn,
} from "./InfoElements";

import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";

import Iframe from "react-iframe";

import { ArrowForward, ArrowRight } from "../HeroSection/HeroElements";

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

  const refImgWraper = useRef(null);

  const refReloadBtn = useRef(null);

  const HandleOnLoad = () => {
    setRenderIframe(true);
    // useRef hook grabs parent element of iframe (can not grab iframe directly bc its rendered conditionaly)
    // access child element (i.e. iframe) by current.children[1]
    // send message to iframe content (webshop) so it hides scroll bars
    if (refImgWraper.current) {
      refImgWraper.current.children[1].contentWindow.postMessage("iframe", "*");
    }
  };

  let history = useHistory();

  const handleClick = () => {
    buttonExternalTarget
      ? window.open(buttonExternalTarget, "_blank")
      : history.push(`${buttonTarget}`);
  };

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  // Tic tac toe iframe dynmaically displays reload button in upper left corner if app has fallen asleep durring mobile screen off

  if (refReloadBtn.current) {
    const sendMessagetoApp = () => {
      // refImgWraper.current.children[1].contentWindow.postMessage(
      //   "reload-app",
      //   "*"
      // );

      document
        .querySelector(".tic_tac_toe_class")
        .contentWindow.postMessage("reload-app", "*");
    };

    const removeReloadButton = () => document;
    refReloadBtn.current.classList.add("reload-button-display-none");

    window.addEventListener("message", (msg) => {
      if (msg.data === "app-sleeps") {
        refReloadBtn.current.classList.remove("reload-button-display-none");
        refReloadBtn.current.addEventListener("click", () => {
          sendMessagetoApp();
          removeReloadButton();
        });
      }
    });
  }

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

                <BtnWrap id="btn_wrap_desktop">
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
                      {buttonLabel}&nbsp;
                      {id === "tic_tac_toe" && <FaGithub />}
                      {id === "sliding_puzzle" && <FaGithub />}
                      {id === "web_shop" && <ImNewTab />}
                      {id === "blockchain" && <ImNewTab />}
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
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                      >
                        {buttonLabel}&nbsp;
                        {hover ? <ArrowForward /> : <ArrowRight />}
                      </NavBtnLink>
                    </NavBtn>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap ref={id === "web_shop" ? refImgWraper : null}>
                {id === "tic_tac_toe" && (
                  <ReloadBtn
                    id="reload_btn"
                    className="reload-button-display-none"
                    ref={refReloadBtn}
                  >
                    <ImLoop2 />
                  </ReloadBtn>
                )}
                {img && <Img id="info_section_image" src={img} alt={alt} />}{" "}
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
              <BtnWrap id="btn_wrap_mobile">
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
                    {buttonLabel}&nbsp;
                    {id === "tic_tac_toe" && <i class="fab fa-github"></i>}
                    {id === "sliding_puzzle" && <i class="fab fa-github"></i>}
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
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
