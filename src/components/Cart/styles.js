import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1em;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 700px) and (max-width: 1240px) {
    align-items: center;
  }
`;
export const ListCart = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 60vw;
  height: 70vh;
  margin-left: 20px;
  border-radius: 5px;
  overflow: auto;

  @media only screen and (max-width: 600px) {
    width: 70%;
    justify-content: space-around;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 60%;
  }
`;
export const TitleCart = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: flex-start;
  margin-left: 5.5em;

  @media only screen and (max-width: 600px) {
    text-align: center;
    margin-left: 0;
  }
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 60%;
  padding: 1em;
  margin: 0 6em;
  border-radius: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    gap: 0px;
    max-width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;
export const Img = styled.img`
  width: 120px;
  height: 120px;
  display: flex;
  align-self: center;

  @media only screen and (max-width: 600px) {
    width: 48vw;
    height: 20vh;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 30vw;
    height: 20vh;
  }
`;
export const Btn = styled.button`
  width: 10vw;
  height: 5vh;
  border-radius: 2px;
  cursor: pointer;
  background: none;
  border: none;
  background-color: cornflowerblue;
  color: aliceblue;

  @media only screen and (max-width: 600px) {
    width: 30vw;
    height: 10vh;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 50vw;
    height: 10vh;
    font-size: 20px;
  }
`;
export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;

  

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    font-size: 20px;

  }
`;
