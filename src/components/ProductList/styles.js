import styled from "styled-components";

export const Vitrine = styled.ul`
  display: flex;
  width: 60%;
  margin: 0 auto;
  gap: 2em;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    overflow: auto;
    width: 90vw;
    overflow: auto;
    margin-bottom: 0.9em;
    gap: 0;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 80%;
    flex-direction: column;
    width: 80vw;
    height: 70vh;
  }
`;
