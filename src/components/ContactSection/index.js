import React, { useState } from "react";
import emailjs from "emailjs-com";
import { RiMailSendLine } from "react-icons/ri";

import {
  ContactContainer,
  Form,
  ColumnRow,
  Column1,
  Column2,
  NameInput,
  EmailInput,
  SubjectLineInput,
  MessageInput,
  Button,
  ResponseContainer,
  Response,
  ResponseText,
  ContactTextWrapper,
} from "./ContactElements";

import { Heading, Subtitle, BtnWrap } from "../InfoSection/InfoElements";

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
    <ContactContainer id="contact">
      <ContactTextWrapper id="contact_text_wrapper">
        {" "}
        <Heading lightText={lightText} style={{ textAlign: "center" }}>
          {headLine}
        </Heading>
        <Subtitle lightText={lightText} style={{ textAlign: "center" }}>
          {description}
        </Subtitle>
      </ContactTextWrapper>
      <Form onSubmit={handleSubmit} id="form">
        <ResponseContainer
          id="response_container"
          style={{ display: renderResponse ? "block" : "none" }}
        >
          <Response id="response" onClick={handleClick}>
            <ResponseText>
              Thank you for your message. I will be in touch very shortly.
            </ResponseText>
          </Response>
        </ResponseContainer>{" "}
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
          placeholder="Place your message here*"
          type="text"
          name="message"
          required
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
    </ContactContainer>
  );
};

export default ContactSection;
