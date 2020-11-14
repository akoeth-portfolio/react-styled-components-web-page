import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import PrivacyPolicy from "./components/LegalStuff/PrivacyPolicy";
import LegalNotice from "./components/LegalStuff/LegalNotice";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [english, setEnglish] = useState(true);

  const changeLanguage = () => setEnglish(!english);

  return (
    <div>
      <Router>
        <Navbar
          toggle={toggle}
          legalStuff={true}
          english={english}
          changeLanguage={changeLanguage}
        />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/privacy_policy"
            render={() => <PrivacyPolicy english={english} />}
          />
          <Route
            path="/legal_notice"
            render={() => <LegalNotice english={english} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
