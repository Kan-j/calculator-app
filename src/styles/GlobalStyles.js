import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        font-family: 'League Spartan', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme})=> theme.colors.mainBackground};
    }
`

export default GlobalStyles