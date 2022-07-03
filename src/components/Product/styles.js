import styled from 'styled-components'

export const ItemList = styled.li`
    font-family: sans-serif;
    font-size: 1rem;
    margin-top: 20px;
    background-color:#fff;
    height: 60vh;
    width: 17vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2em;
    border-radius: 5px;
`
export const Img = styled.img`
    width: 150px;
    height: 150px;
    display: flex;
    align-self: center;
`
export const Text = styled.p`
    font-weight: 600;
    font-size: 14px;
    font-family: sans-serif;
`
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
`