import styled from "styled-components";

export const ScreenStyle = styled.h1`
    height : 15vh;
    background-color: ${({theme}) => theme.colors.screenBackground};
    width : 100%;
    font-size : 4rem;
    padding: 20px;
    margin-bottom: 3vh;
    border: 0;
    text-align: end;
    overflow : hidden;
    border-radius: 0.5rem;
    color: ${({ theme }) => {
    if (theme.name === "Dark") {
        return theme.colors.textWhite;
    } else {
        return theme.colors.textGrayish;
    }
    }};

    &:active, &:focus {
        border: none;
        outline: none;
    }
    

`