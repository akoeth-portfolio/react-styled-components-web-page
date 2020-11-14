import React, { Fragment } from "react";
import PrivacyPolicyEnglish from "./PrivacyPolicyEnglish";
import PrivacyPolicyGerman from "./PrivacyPolicyGerman";

function PrivacyPolicy({ english }) {
  return (
    <Fragment>
      {english ? <PrivacyPolicyEnglish /> : <PrivacyPolicyGerman />}
    </Fragment>
  );
}

export default PrivacyPolicy;
