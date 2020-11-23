import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSocketDotIo } from "react-icons/si";

export const homeObjOne = {
  id: "about_me",
  className: "about_me_class",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About Me",
  headLine: "",
  description:
    "Hi, I'm Andreas. A geologist turned full stack web developer, I am fully immersed in building web applications. This webpage showcases some of my projects. My main focus is JavaScript and the MERN stack. Recently I've developed an interest in distributed apps (dapps) and in writing smart contracts with Solidity on the Ethereum blockchain. I never stop learning and building and every new project is a much welcome challenge to be tackeled with enthusiasm and in a goal-driven and target-oriented fashion.",
  buttonLabel: "Go to projects",
  buttonTarget: "/web_shop",
  imgStart: false,
  img: require("../../images/svg-1.svg").default,
  alt: "web development",
  dark: true,
  primary: true,
  darkText: true,
};

export const homeObjTwo = {
  id: "web_shop",
  className: "web_shop_class",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Project No 1",
  headLine: "Bicycle Webshop",
  description:
    "This app features some of the most common user facing functionalities that can be found in modern webshop applications. It has been build using the MERN tech stack.",
  teckStackHeader: "Frameworks and Libraries:",
  teckStack: {
    React: <FaReact />,
    Redux: <SiRedux />,
    Node: <FaNodeJs />,
    Express: "ex",
    MongoDB: <DiMongodb />,
  },
  buttonLabel: "open in tab",
  buttonExternalTarget: "https://mern-stack-example-webshop.herokuapp.com/",
  imgStart: true,
  url: "https://mern-stack-example-webshop.herokuapp.com/",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "sliding_puzzle",
  className: "sliding_puzzle_class",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Project No 2",
  headLine: "Sliding Puzzle",
  description:
    "This little application challenges its users to slide each piece of the puzzle back in the correct position. Players can choose between numbers or a selection of images.",
  teckStackHeader: "Frameworks and Libraries:",
  teckStack: {
    React: <FaReact />,
  },
  buttonLabel: "see the code on github",
  buttonExternalTarget: "https://github.com/akoeth-portfolio/sliding-puzzle",
  imgStart: false,
  url: "https://puzzle-react.herokuapp.com/",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFour = {
  id: "tic_tac_toe",
  className: "tic_tac_toe_class",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Project No 3",
  headLine: "Tic Tac Toe Chat",
  description:
    "A classic implementation of the good old tic tac toe principle, this application enables its users to play against each other while having a little chat.",
  teckStackHeader: "Frameworks and Libraries:",
  teckStack: {
    React: <FaReact />,
    Node: <FaNodeJs />,
    Express: "ex",
    "Socket io": <SiSocketDotIo />,
  },
  buttonLabel: "see the code on github",
  buttonExternalTarget: "https://github.com/akoeth-portfolio/tic-tac-toe",
  imgStart: true,
  url: "https://tic-tac-toe-web-s.herokuapp.com/",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjFive = {
  id: "blockchain",
  className: "blockchain_class",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Project No 4",
  headLine: "Blockchain",
  description:
    "This app showcases some of the functionalities a blockchain has. By no means comprehensive, it nonetheless offers a tiny glimpse into the rapidly emerging world of blockchain technology.",
  teckStackHeader: "Frameworks and Libraries:",
  teckStack: {
    React: <FaReact />,
  },
  buttonLabel: "open in tab",
  buttonExternalTarget: "https://blockchain-demo-app.herokuapp.com/",
  imgStart: false,
  url: "https://blockchain-demo-app.herokuapp.com/",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjSix = {
  id: "contact_form",
  className: "contact_form_class",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headLine: "Contact",
  description: "Feel free to send me a message",
  buttonLabel: "Send",
  buttonExternalTarget: "https://blockchain-demo-app.herokuapp.com/",
  dark: true,
  primary: true,
  darkText: false,
};
