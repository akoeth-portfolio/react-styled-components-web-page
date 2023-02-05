import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSocketDotIo } from "react-icons/si";

export const homeObj1 = {
  id: "about_me",
  className: "about_me_class",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About Me",
  headLine: "",
  gitHubLinkTarget: "https://github.com/akoeth-portfolio",
  buttonLabel: "Go to projects",
  buttonTarget: "/web_shop",
  imgStart: false,
  img: require("../../images/svg-1.svg").default,
  alt: "web development",
  dark: true,
  primary: true,
  darkText: true,
};

export const homeObj2 = {
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
  gitHubLinkTarget:
    "https://github.com/akoeth-portfolio/bicycle-example-webshop",

  buttonLabel: "open in tab",
  buttonExternalTarget: "https://bicycle-example-webshop.onrender.com",
  imgStart: true,
  url: "https://bicycle-example-webshop.onrender.com",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObj3 = {
  id: "crypto_portfolio_viewer",
  className: "crypto_portfolio_viewer_class",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Project No 2",
  headLine: "Crypto Portfolio Viewer",
  description:
    "This app is for cryptocurrency hodlers. At a glance users can see what's going on in their crypto portfolio based on prices as provided by the CoinGecko API V3. A diverse array of charts visualizes things. Explore the example portfolio (email address and password set as default in the sign in form) or create your own and see how it evolves!",
  teckStackHeader: "Frameworks and Libraries:",
  teckStack: {
    React: <FaReact />,
    Cart_js: <AiOutlineLineChart />,
    Node: <FaNodeJs />,
    Express: "ex",
    MongoDB: <DiMongodb />,
  },
  gitHubLinkTarget:
    "https://github.com/akoeth-portfolio/cryptocurrency-portfolio-viewer",
  buttonLabel: "open in tab",
  buttonExternalTarget: "https://cryptocurrency-portfolio-viewer.onrender.com/",
  imgStart: false,
  url: "https://cryptocurrency-portfolio-viewer.onrender.com/",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObj4 = {
  id: "tic_tac_toe",
  className: "tic_tac_toe_class",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Project No 3",
  headLine: "Tic Tac Toe Chat",
  description:
    "A classic implementation of the good old tic tac toe principle, this application enables you to play against a friend while having a little chat.",
  teckStackHeader: "Frameworks and Libraries:",
  teckStack: {
    React: <FaReact />,
    Node: <FaNodeJs />,
    Express: "ex",
    "Socket io": <SiSocketDotIo />,
  },
  gitHubLinkTarget: "https://github.com/akoeth-portfolio/tic-tac-toe",

  buttonLabel: "open in tab",
  buttonExternalTarget: "https://tic-tac-toe-web-s.herokuapp.com/",
  imgStart: true,
  url: "https://tic-tac-toe-web-s.herokuapp.com/",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObj5 = {
  id: "sliding_puzzle",
  className: "sliding_puzzle_class",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Project No 4",
  headLine: "Sliding Puzzle",
  description:
    "This little application challenges you to slide each piece of the puzzle back in the correct position. You can choose between numbers or a selection of images.",
  teckStackHeader: "Frameworks and Libraries:",
  teckStack: {
    React: <FaReact />,
  },
  gitHubLinkTarget: "https://github.com/akoeth-portfolio/sliding-puzzle",
  buttonLabel: "open in tab",
  buttonExternalTarget: "https://puzzle-react.herokuapp.com/",
  imgStart: false,
  url: "https://puzzle-react.herokuapp.com/",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObj6 = {
  id: "blockchain",
  className: "blockchain_class",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Project No 5",
  headLine: "Blockchain",
  description:
    "This app showcases some of the functionalities a blockchain has. By no means comprehensive, it nonetheless offers a tiny glimpse into the rapidly emerging world of blockchain technology.",
  teckStackHeader: "Frameworks and Libraries:",
  teckStack: {
    React: <FaReact />,
  },
  gitHubLinkTarget:
    "https://github.com/akoeth-portfolio/blockchain-functionality-showcase-app",

  buttonLabel: "open in tab",
  buttonExternalTarget: "https://blockchain-demo-app.herokuapp.com/",
  imgStart: true,
  url: "https://blockchain-demo-app.herokuapp.com/",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObj7 = {
  id: "contact_form",
  className: "contact_form_class",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headLine: "Contact",
  description: "Feel free to send me a message",
  buttonLabel: "Send",
  buttonExternalTarget: "https://blockchain-demo-app.herokuapp.com/",
  dark: false,
  primary: false,
  darkText: true,
};
