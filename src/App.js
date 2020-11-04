import React from "react";
import "./App.css";
import "./components/InfoSection/aux.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
