import React, { useState } from "react";
import {
  Form,
  ColumnRow,
  Column1,
  Column2,
  EmailInput,
  NameInput,
  MessageInput,
} from "./ContactElements";
import { Button } from "../ButtonElements";

import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
} from "../InfoSection/InfoElements";

import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";

const ContactSection = ({
  id,
  className,
  lightBg,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  buttonExternalTarget,
  dark,
  primary,
  darkText,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleClick = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <InfoContainer>
      {" "}
      <TextWrapper>
        {" "}
        <Heading lightText={lightText} style={{ textAlign: "center" }}>
          {headLine}
        </Heading>
        <Subtitle lightText={lightText} style={{ textAlign: "center" }}>
          {description}
        </Subtitle>
      </TextWrapper>
      <Form
        id="gform"
        method="POST"
        class="pure-form pure-form-stacked"
        data-email="from_email@example.com"
        action="https://formsubmit.co/dukewellington61@googlemail.com"
      >
        {" "}
        <ColumnRow>
          <Column1>
            <input type="hidden" name="_replyto" />
            <EmailInput
              placeholder="Enter your email address"
              onChange={handleChange}
              type="email"
              name="email"
            />
          </Column1>
          <Column2>
            <NameInput
              placeholder="Enter your name"
              onChange={handleChange}
              type="text"
              name="name"
            />
          </Column2>
        </ColumnRow>
        <MessageInput
          placeholder="Place your message here"
          onChange={handleChange}
          type="text"
          name="message"
        />
        <input
          type="hidden"
          name="_next"
          value="https://duke-portfolio-app.herokuapp.com/"
        ></input>
        <BtnWrap
          id="btn_wrap_desktop"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Button
            type="submit"
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            onClick={handleClick}
          >
            {" "}
            {buttonLabel}&nbsp;
          </Button>
        </BtnWrap>
      </Form>{" "}
    </InfoContainer>
  );
};

export default ContactSection;
