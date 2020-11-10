import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { RiMailSendLine } from "react-icons/ri";

import {
  Form,
  ColumnRow,
  Column1,
  Column2,
  NameInput,
  EmailInput,
  SubjectLineInput,
  MessageInput,
  Button,
  ResponeContainer,
  Response,
  ResponseText,
} from "./ContactElements";

import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
} from "../InfoSection/InfoElements";

import { ButtonLink } from "../ButtonElements";

const ContactSection = ({
  lightText,
  headLine,
  description,
  buttonLabel,
  dark,
  primary,
}) => {
  const [renderResponse, setRenderResponse] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");

    setRenderResponse(true);
    setTimeout(() => setRenderResponse(false), 10000);

    emailjs
      .sendForm(
        "gmail",
        "template_s0xy8e1",
        e.target,
        "user_zdJj01oT6EHnDEPEJb0jQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClick = () => setRenderResponse(false);

  return (
    <InfoContainer>
      <TextWrapper style={{ paddingTop: "7.5rem" }}>
        {" "}
        <Heading lightText={lightText} style={{ textAlign: "center" }}>
          {headLine}
        </Heading>
        <Subtitle lightText={lightText} style={{ textAlign: "center" }}>
          {description}
        </Subtitle>
      </TextWrapper>
      <Form onSubmit={handleSubmit}>
        <ResponeContainer
          id="response_container"
          style={{ display: renderResponse ? "block" : "none" }}
        >
          <Response>
            <ResponseText>
              Thank you for your message. I will be in touch very shortly.
            </ResponseText>
            <BtnWrap
              id="btn_wrap_desktop"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <ButtonLink
                onClick={handleClick}
                value="send"
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
              >
                Send another message
              </ButtonLink>
            </BtnWrap>
          </Response>
        </ResponeContainer>{" "}
        <ColumnRow>
          <Column1>
            <NameInput placeholder="Enter your name" type="text" name="name" />
          </Column1>
          <Column2>
            <EmailInput
              placeholder="Enter your email address*"
              type="email"
              name="email"
              required
            />
          </Column2>
        </ColumnRow>
        <SubjectLineInput
          placeholder="Enter the subject of your message"
          type="text"
          name="subject"
        />
        <MessageInput
          placeholder="Place your message here"
          type="text"
          name="message"
        />
        <BtnWrap
          id="btn_wrap_desktop"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
            paddingBottom: "7.5rem",
          }}
        >
          <Button
            type="submit"
            value="send"
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
          >
            {" "}
            {buttonLabel}&nbsp;
            <RiMailSendLine style={{ fontSize: "1.25em" }} />
          </Button>
        </BtnWrap>
      </Form>{" "}
    </InfoContainer>
  );
};

export default ContactSection;
