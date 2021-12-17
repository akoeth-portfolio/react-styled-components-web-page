import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  color: #fff;
  min-height: 100vh;
  /* max-height: auto; */
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#000000")};

  @media screen and (min-width: 600px) {
    padding: 3rem 0;
  }

  @media screen and (min-width: 992px) {
    padding-top: 8rem;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    /* height: 900px; */
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-column-gap: 3rem;
  /* grid-row-gap: 2rem; */
  /* width: 100vw; */
  /* align-items: center; */
  /* justify-content: center; */
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media only screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    /* grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100%, auto);  */
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  width: 100vw;
  margin-bottom: 15px;
  grid-area: col2;
  padding: 0 15px;

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 600px) {
    margin-top: 3rem;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const TopLine = styled.div`
  color: #ff6a00;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#000000")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  width: 100%;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  color: ${({ darkText }) => (darkText ? "#000000" : "#fff")};
`;

export const TeckStackHeader = styled.p`
  max-width: 440px;
  font-size: 17px;
  line-height: 24px;
  font-weight: bold;
  color: ${({ darkText }) => (darkText ? "#000000" : "#fff")};
`;

export const TechStack = styled.p`
  max-width: 440px;
  font-size: 15px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#000000" : "#fff")};

  @media only screen and (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const GitHubLink = styled.a`
  display: inline-block;
  color: ${({ darkText }) => (darkText ? "#000000" : "#fff")};
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: 555px;
    height: 100%;
  }
`;

export const IframeWrap = styled.div`
  position: relative;
  margin-bottom: 3rem;

  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 555px;
    height: 100%;
    padding-top: 2rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const Spinner = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(232, 224, 223, 0.75);
`;

export const ReloadOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(10, 10, 10, 0.5);
  height: 100%;
  width: 100%;
  z-index: 999;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
`;

export const ReloadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: rgb(0, 0, 0);
  color: rgb(256, 256, 256);
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  padding: 25px 40px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
