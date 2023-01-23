import styled from "styled-components";

export const StyledKeyPadCover = styled.div`
    width: 100%;
    height :60vh;
    /* display : flex; */
    justify-content: center; 
    align-items: center;
    border-radius : 0.5rem;
    padding: 30px;
    /* background-color: hsl(0, 5%, 81%); */
    background-color: ${({theme})=> theme.colors.toggleBackground};
    display : grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: 7vh 7vh 7vh; */
    gap: 1rem;

`

