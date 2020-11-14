import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LegalStuffNavBar from "./components/LegalStuff/LegalStuffNavBar";
import Home from "./pages";
import PrivacyPolicy from "./components/LegalStuff/PrivacyPolicy";
import LegalNotice from "./components/LegalStuff/LegalNotice";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/privacy_policy" render={() => <PrivacyPolicy />} />
          <Route path="/legal_notice" render={() => <LegalNotice />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
