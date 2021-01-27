import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import InfoSection from "../components/InfoSection";
import ContactSection from "../components/ContactSection";

import Sidebar from "../components/Sidebar";

import {
  homeObj1,
  homeObj2,
  homeObj3,
  homeObj4,
  homeObj5,
  homeObj6,
  homeObj7,
} from "../components/InfoSection/Data";

import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...homeObj1} />
      <InfoSection {...homeObj2} />
      <InfoSection {...homeObj3} />
      <InfoSection {...homeObj4} />
      <InfoSection {...homeObj5} />
      <InfoSection {...homeObj6} />
      <ContactSection {...homeObj7} />
      <Footer />
    </>
  );
};

export default Home;
