import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LangContainer,
  LangImg,
  LangName,
} from "../Navbar/NavbarElements";

import LangGerFlag from "../../images/germany-flag.png";
import LangUKFlag from "../../images/uk-flag.png";

const LegalStuffNavBar = ({ changeLanguage }) => {
  // language settings
  const [ukFlag, setUkFlag] = useState(true);

  const changeFlag = () => {
    setUkFlag(!ukFlag);
    changeLanguage();
  };

  return (
    <>
      <Nav id="nav">
        <NavbarContainer>
          <NavLogo to="/">portfolio</NavLogo>
          <LangContainer
            id="lang_container"
            className="noSelect"
            onClick={changeFlag}
          >
            <LangImg src={ukFlag ? LangUKFlag : LangGerFlag} alt="flag" />
            <LangName>&nbsp;{ukFlag ? "English" : "Deutsch"}</LangName>
          </LangContainer>
        </NavbarContainer>
      </Nav>
      ;
    </>
  );
};

export default LegalStuffNavBar;
