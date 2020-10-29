import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
