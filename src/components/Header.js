import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {HeaderContainer, H3, Input, ThemeSwitchDiv, ThemeOverallContainer, SPAN} from '../styles/Header.styled'
import {useTheme} from '../Themes/useTheme';
import { getFromLS } from '../Utils/storage';

const ThemedButton = styled.button`
    border-radius: 50%;
    width: 15px;
    height: 15px;
`;

const Wrapper = styled.li`
    
`;

const Container = styled.ul`
    
`;

const Header = styled.h2`

`;


export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }


    // const radio1Ref = useRef()
    // const radio2Ref = useRef()
    // const radio3Ref = useRef()
    
    // const onButtonClick = (e) => {
    //     // console.log(e.target);
    //     const targ = e.target;
    //     targ.style.opacity = 1
    //     const itemId = targ.id;
    //     const radio1Id = radio1Ref.current.id;
    //     const radio2Id = radio2Ref.current.id;
    //     const radio3Id = radio3Ref.current.id;
        
    //     if (radio1Id === itemId) {
    //         radio1Ref.current.style.opacity= 1;
    //         radio2Ref.current.style.opacity= 0;
    //         radio3Ref.current.style.opacity = 0;
            
            

    //     }else if (radio2Id === itemId) {
    //         radio1Ref.current.style.opacity= 0;
    //         radio2Ref.current.style.opacity= 1;
    //         radio3Ref.current.style.opacity = 0;
            

    //     }
    //     else if (radio3Id === itemId) {
    //         radio1Ref.current.style.opacity= 0;
    //         radio2Ref.current.style.opacity= 0;
    //         radio3Ref.current.style.opacity = 1;
            

    //     }
    // }





    const ThemeCard = props => {
        return(
            <div> 
                <ThemedButton onClick={ (theme) => themeSwitcher(props.theme) }
                    style={{
                        backgroundColor: `${data[_.camelCase(props.theme.name)].colors.toggleBackground}`,
                        color: `${data[_.camelCase(props.theme.name)].colors.toggleBackground}`,
                        display: `${props.theme} ? '': 'none'`
                    }}>
                </ThemedButton>
            </div>
        )
    }

    return (
        <div>
            <Container>
            <HeaderContainer>
                        <H3>calc</H3>
                        <ThemeOverallContainer>
                        <h4>THEME</h4>
                        <ThemeSwitchDiv>
                            <div>
                                <SPAN>1</SPAN>
                                <SPAN>2</SPAN>
                                <SPAN>3</SPAN>
                            </div>
                            <Input>
                            {
                                themes.length > 0 && 
                                    themes.map(theme =>(
                                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                                    ))
                            }
                                {/* <input type="radio" onClick={onButtonClick} ref={radio1Ref} name="togggle" id="one" /> 
                                <input type="radio" onClick={onButtonClick} ref={radio2Ref} name="togggle" id="two" /> 
                                <input type="radio" onClick={onButtonClick} ref={radio3Ref} name="togggle" id="three" />  */}
                            </Input>
                        </ThemeSwitchDiv>
                    </ThemeOverallContainer>
                </HeaderContainer>  
            
            </Container>
        </div>
    )
}