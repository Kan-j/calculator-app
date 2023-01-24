import styled from "styled-components";

export const StyledKeyPad = styled.button`
    /* padding : 0.6rem; */
    /* width: 5rem; */

    width: 100%;
    height: 100%;
    font-size : 2rem;
    font-weight: 700;
    border: none;
    /* Text COlor */
    /* color : hsl(60, 10%, 19%); */
    color : ${({ theme, change }) => {
    if (change) {
        return theme.colors.textWhite;
    } else {
        return theme.colors.textGrayish;
        }
    }};
    
    background-color: ${({ theme, change , equal}) => {
    if (change) {
        if (equal) {
            return theme.colors.keyBackground02;
        } else {
            return theme.colors.keyBackground01;
        }
        
    } else {
        return theme.colors.keyBackground03;
    }
    }};

    grid-column: span ${({span})=> span};
    /* Box shadow color */
    box-shadow: 0px 5px 0px ${({ theme, change , equal}) => {
    if (change) {
        if (equal) {
            return theme.colors.keyShadow02;
        } else {
            return theme.colors.keyShadow01;
        }
        
    } else {
        return theme.colors.keyShadow03;
    }
    }};
    


    border-radius: 0.5rem;
    /* background-color:  hsl(0, 0%, 90%); */
    cursor: pointer;

    &:hover{
        background-color: ${({ theme, change , equal}) => {
            if (change) {
                if (equal) {
                    return theme.colors.keyBackground02;
                } else {
                    return theme.colors.keyBackground01;
                }
                
            } else {
                return theme.colors.keyBackground03;
            }
}};
        
        box-shadow: 0px 5px 0px ${({ theme, change , equal}) => {
    if (change) {
        if (equal) {
            return theme.colors.keyShadow02;
        } else {
            return theme.colors.keyShadow01;
        }
        
    } else {
        return theme.colors.keyShadow03;
    }
    }};
    
    }

`
