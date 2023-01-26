import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vh;
    margin-top: 5vh;
    
`

export const ThemeOverallContainer = styled.div`
    display: flex;
    align-items: end;
    
    h4 {
        color: ${({ theme }) => {
    if (theme.name === "Dark") {
        return theme.colors.textWhite;
    } else {
        return theme.colors.textGrayish;
    }
    }};
    }
    
`


export const H3 = styled.h1`
    font-size : 2rem;
    color: ${({ theme }) => {
    if (theme.name === "Dark") {
        return theme.colors.textWhite;
    } else {
        return theme.colors.textGrayish;
    }
    }};

`
export const Input = styled.div`
    display: flex;
    justify-center : center;
    border: 3px solid ${({theme}) => theme.colors.toggleBackground};
    border-radius: 25px;
    background-color : ${({theme}) => theme.colors.toggleBackground};
    /* ThemedButton {
        height: 20px;
        width: 20px;
        appearance: none;
        border-radius: 50%;
        opacity: 0;
        background-color:  ${({theme}) => theme.colors.keyBackground02};
    } */
    
    /* #one{
        opacity: 1;
    } */
`

export const ThemeSwitchDiv = styled.div`
    width: 4.5rem;
    margin-left: 2rem;

    div {
        display: flex;
        justify-content: space-between;
    }
`

export const SPAN = styled.span`
    color: ${({ theme }) => {
    if (theme.name === "Dark") {
        return theme.colors.textWhite;
    } else {
        return theme.colors.textGrayish;
    }
    }};
`