import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import InfoSection from "../components/InfoSection";
import ContactSection from "../components/ContactSection";

import Sidebar from "../components/Sidebar";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
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
      <Navbar toggle={toggle} legalStuff={false} />
      <HeroSection />
      <AboutSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <ContactSection {...homeObjSix} />
      <Footer />
    </>
  );
};

export default Home;
