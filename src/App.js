import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import PrivacyPolicy from "./components/LegalStuff/PrivacyPolicy";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Router>
        <Navbar toggle={toggle} legalStuff={true} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/privacy_policy" component={PrivacyPolicy} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
