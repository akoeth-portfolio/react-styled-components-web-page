import React, { Fragment } from "react";
import LegalNoticeEnglish from "./LegalNoticeEnglish";
import LegalNoticeGerman from "./LegalNoticeGerman";

const LegalNotice = ({ english }) => {
  return (
    <Fragment>
      {english ? <LegalNoticeEnglish /> : <LegalNoticeGerman />}
    </Fragment>
  );
};

export default LegalNotice;
