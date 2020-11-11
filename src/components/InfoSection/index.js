import React, { useState, useRef } from "react";
import { ButtonLink } from "../ButtonElements";
import { Subtitle } from "./InfoElements";
import { useHistory } from "react-router-dom";
import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

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
  IframeWrap,
  ReloadBtn,
} from "./InfoElements";

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
  url,
  primary,
  dark,
  dark2,
}) => {
  const [iframeRendered, setIframeRendered] = useState(false);

  const refIframe = useRef(null);

  const refReloadBtn = useRef(null);

  // Tic tac toe iframe dynamically displays reload button in upper left corner if app has fallen asleep durring mobile screen off
  const sendMessagetoApp = () => {
    if (refIframe.current && refIframe.current.children[0].id === "tic_tac_toe")
      refIframe.current.children[0].contentWindow.postMessage(
        "reload-app",
        "*"
      );
  };

  const removeReloadButton = () => {
    if (refReloadBtn.current)
      refReloadBtn.current.classList.add("reload-button-display-none");
  };

  window.addEventListener("message", (msg) => {
    if (refReloadBtn.current && msg.data === "app-sleeps") {
      refReloadBtn.current.classList.remove("reload-button-display-none");
      refReloadBtn.current.addEventListener("click", () => {
        sendMessagetoApp();
        removeReloadButton();
      });
    }
  });

  const handleOnLoad = () => {
    setIframeRendered(true);
    // useRef hook grabs parent element of iframe (can not grab iframe directly bc I don't know why)
    // access child element (i.e. iframe) by current.children[1]
    // send message to iframe content (webshop) so it hides scroll bars
    if (refIframe.current && refIframe.current.children[0].id === "web_shop")
      refIframe.current.children[0].contentWindow.postMessage("iframe", "*");
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
        <InfoWrapper id="info_wrapper">
          <InfoRow id="info_row" imgStart={imgStart}>
            <Column1 id="column_1">
              <TextWrapper id="text_wrapper">
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <TeckStackHeader darkText={darkText}>
                  {teckStackHeader}
                </TeckStackHeader>

                <TechStack darkText={darkText}>
                  {Object.entries(teckStack).map(([key, value]) => (
                    <div style={{ display: "flex" }}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {value}&nbsp;
                        </div>
                      </div>
                      <p>
                        <td>&nbsp;{key}</td>
                      </p>
                    </div>
                  ))}
                </TechStack>
                <BtnWrap id="btn_wrap_desktop">
                  <ButtonLink
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
                  </ButtonLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2 id="column_2">
              <IframeWrap id="iframe_wrap">
                {!iframeRendered && (
                  <Spinner>
                    {" "}
                    <i
                      className="fa fa-cog fa-spin"
                      style={{ fontSize: "10rem" }}
                    />
                  </Spinner>
                )}
                <div ref={refIframe} style={{ position: "relative" }}>
                  <Iframe
                    id={id}
                    className={className}
                    url={url}
                    width="100%"
                    height={
                      className === "tic_tac_toe_class" ? "550px" : "450px"
                    }
                    display="initial"
                    position="relative"
                    onLoad={handleOnLoad}
                  />

                  {id === "tic_tac_toe" && (
                    <ReloadBtn
                      id="reload_btn"
                      className="reload-button-display-none"
                      ref={refReloadBtn}
                    >
                      <AiOutlineReload />
                    </ReloadBtn>
                  )}
                </div>
                <BtnWrap id="btn_wrap_mobile">
                  <ButtonLink
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
                  </ButtonLink>
                </BtnWrap>
              </IframeWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
