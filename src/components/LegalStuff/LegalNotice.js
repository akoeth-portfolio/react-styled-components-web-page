import React, { Fragment, useState } from "react";
import LegalStuffNavBar from "./LegalStuffNavBar";

import LegalNoticeEnglish from "./LegalNoticeEnglish";
import LegalNoticeGerman from "./LegalNoticeGerman";

const LegalNotice = () => {
  const [english, setEnglish] = useState(true);

  const changeLanguage = () => setEnglish(!english);

  return (
    <Fragment>
      <LegalStuffNavBar changeLanguage={changeLanguage} />
      {english ? <LegalNoticeEnglish /> : <LegalNoticeGerman />}
    </Fragment>
  );
};

export default LegalNotice;
