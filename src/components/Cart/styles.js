import styled from "styled-components";

export const ListCart = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 60vw;
    height: 70vh;
    margin-left: 20px;
    border-radius: 5px;
    overflow: auto;
`
export const TitleCart = styled.p`
    font-size: 20px;
    font-weight: 700;
    text-align: flex-start;
    margin-left: 20px;
`
export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    max-width: 60%;
    padding: 1em;
    margin: 0 6em;
    border-radius: 20px;
`
export const Img = styled.img`
    width: 120px;
    height: 120px;
    display: flex;
    align-self: center;
`
export const Btn = styled.button`
    width: 10vw;
    height: 5vh;
    border-radius: 2px;
    cursor: pointer;
    background: none;
    border: none;
    background-color: cornflowerblue;
    color: aliceblue;
`
export const Text = styled.p`
    font-size: 12px;
    font-weight: 500;
`