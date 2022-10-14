import styled from "styled-components";

export const TotalSum = styled.div`
  border: 1px aliceblue solid;
  border-radius: 3px;
  background-color: #fff;
  width: 15vw;
  height: 30vh;
  box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 50vw;
    height: 30vh;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 20vw;
    height: 30vh;
    justify-content: center;
  }
`;
export const Btn = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  background-color: cornflowerblue;
  cursor: pointer;
  height: 5vh;
  width: 12vw;
  color: #fff;
  font-family: sans-serif;

  @media only screen and (max-width: 600px) {
    width: 30vw;
  }
`;
export const Title = styled.h5`
  padding: 20px;
  font-size: 15px;
  
  @media screen and (min-width: 700px) and (max-width: 1240px) {
    text-align: center;
    padding: 5px;
  }
`;
export const Text = styled.p`
  font-weight: 500;

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    text-align: center;
  }
`;
