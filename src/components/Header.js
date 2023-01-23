import React, { useEffect, useState } from 'react'
import {HeaderContainer, H3, Input, ThemeSwitchDiv, ThemeOverallContainer, SPAN} from '../styles/Header.styled'
import { useRef } from 'react'
import { getFromLS } from '../Utils/storage';
import { useTheme } from '../Themes/useTheme';
import _ from 'lodash'

const Header = () => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();



    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
    };


    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    // console.log(themes);
    // console.log(data[themes[0]]);

    const radio1Ref = useRef()
    const radio2Ref = useRef()
    const radio3Ref = useRef()
    
    const onButtonClick = (e) => {
        // console.log(e.target);
        const targ = e.target;
        targ.style.opacity = 1
        const itemId = targ.id;
        const radio1Id = radio1Ref.current.id;
        const radio2Id = radio2Ref.current.id;
        const radio3Id = radio3Ref.current.id;
        
        if (radio1Id === itemId) {
            radio1Ref.current.style.opacity= 1;
            radio2Ref.current.style.opacity= 0;
            radio3Ref.current.style.opacity = 0;
            themeSwitcher(data[themes[0]]);
            

        }else if (radio2Id === itemId) {
            radio1Ref.current.style.opacity= 0;
            radio2Ref.current.style.opacity= 1;
            radio3Ref.current.style.opacity = 0;
            themeSwitcher(data[themes[1]])

        }
        else if (radio3Id === itemId) {
            radio1Ref.current.style.opacity= 0;
            radio2Ref.current.style.opacity= 0;
            radio3Ref.current.style.opacity = 1;
            themeSwitcher(data[themes[2]])

        }
    }
    
  return (
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
                     <input type="radio" onClick={onButtonClick} ref={radio1Ref} name="togggle" id="one" /> 
                     <input type="radio" onClick={onButtonClick} ref={radio2Ref} name="togggle" id="two" /> 
                     <input type="radio" onClick={onButtonClick} ref={radio3Ref} name="togggle" id="three" /> 
                  </Input>
              </ThemeSwitchDiv>
          </ThemeOverallContainer>
      </HeaderContainer>
  )
}

export default Header