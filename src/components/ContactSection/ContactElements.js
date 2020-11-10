import styled from "styled-components";

export const Form = styled.form`
  top: 20%;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

export const ColumnRow = styled.div`
  /* width: 100vw; */
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 0rem;
  grid-auto-columns: minmax(auto 1fr);
  /* align-items: center;
  justify-content: center; */
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }

  /* @media only screen and (min-width: 768px) {
    width: 100%;
  } */
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

export const EmailInput = styled.input`
  width: 100%;
`;

export const NameInput = styled.input`
  width: 100%;
`;

export const MessageInput = styled.textarea`
  padding-top: 2em;
  padding-bottom: 1rem;
  width: 100%;
  height: 10rem;
`;
