import styled from "styled-components";

export const Headerr = styled.header`
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.75);
  height: 8vh;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    height: 15vh;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    flex-direction: column;
  }
`;
export const H1 = styled.h1`
  font-size: 20px;
`;
export const DivBtn = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;
export const Btn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-self: center;
  gap: 10px;
  font-weight: 600;
`;
export const Img = styled.img`
  width: 20px;
`;
