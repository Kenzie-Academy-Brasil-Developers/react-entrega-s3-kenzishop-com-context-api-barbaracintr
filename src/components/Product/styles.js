import styled from "styled-components";

export const ItemList = styled.li`
  font-family: sans-serif;
  font-size: 1rem;
  margin-top: 20px;
  background-color: #fff;
  height: 60vh;
  width: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
  border-radius: 5px;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    width: 80%;
    height: 40vh;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const Img = styled.img`
  width: 15em;
  height: 14em;
  display: flex;
  align-self: center;

  @media only screen and (max-width: 600px) {
    width: 8em;
    height: 8em;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 10em;
    height: 10em;
  }
`;
export const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  font-family: sans-serif;

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    font-size: 20px;
  }
`;
export const Btn = styled.button`
  width: 15vw;
  height: 5vh;
  border-radius: 2px;
  cursor: pointer;
  background: none;
  border: none;
  background-color: cornflowerblue;
  color: aliceblue;
  font-family: sans-serif;

  @media only screen and (max-width: 600px) {
    width: 50vw;
    font-size: 1em;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 20vw;
    font-size: 1.2em;
  }
`;
