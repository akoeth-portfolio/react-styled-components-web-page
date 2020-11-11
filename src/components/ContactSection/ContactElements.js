import styled from "styled-components";

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#000000")};
  /* height: 100vh; */
  padding-top: 6rem;

  @media screen and (min-width: 768px) {
    padding-top: 10rem;
    height: 100vh;
  }
`;

export const Form = styled.form`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 75%;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const ResponseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1005;
  background-color: rgba(10, 10, 10, 0.75);
`;

export const Response = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(10, 10, 10, 0.9);
  height: 10rem;
  border-style: solid;
  border-color: white;
  border-width: 1px;
  width: 75%;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 3rem;
`;

export const ResponseText = styled.div`
  padding: 1rem;
  color: white;
  font-size: 1em;
  font-weight: bold;
`;

export const ColumnRow = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 0rem;
  grid-auto-columns: minmax(auto 1fr);

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  padding-bottom: 1rem;
  width: 100%;
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding-bottom: 1rem;
  width: 100%;
`;

export const NameInput = styled.input`
  width: 100%;
  height: 2rem;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 2rem;
`;

export const SubjectLineInput = styled.input`
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
`;

export const MessageInput = styled.textarea`
  width: 100%;
  height: 10rem;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

export const ContactTextWrapper = styled.div`
  width: 100%;
  padding-top: 0;
`;
