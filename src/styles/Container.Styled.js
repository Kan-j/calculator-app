import styled from "styled-components";

const Container = styled.div`
    max-width: 500px;
    min-width: 350px;
    margin: 20px auto;
    /* background-color: #455441; */
    height: 90vh;

    @media (min-width : 340px){
        max-width: 330px;
    }
    @media (min-width : 360px){
        max-width: 335px;
    }
    @media (min-width : 375px){
        max-width: 350px;
    }
    @media (min-width : 400px){
        max-width: 390px;
    }
    @media (min-width : 500px){
        max-width: 460px;
    }
`

export default Container