import GlobalStyles from "./styles/GlobalStyles";
import KeyPadCover from "./components/KeyPadCover";
import Container from "./styles/Container.Styled";
import Screen from "./components/Screen";
import Header from "./components/Header";
import { setToLS } from "./Utils/storage";
import * as themes from "./Themes/themes.json"
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Themes/useTheme";
import { useEffect, useState } from "react";


function App() {
  setToLS("all-themes", themes.default);

  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);


  useEffect(()=> {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  
  
  
  return (
  
    <>
      {
        
          themeLoaded &&
          
          <ThemeProvider theme={selectedTheme}>
          <Container>
          <GlobalStyles />
          <Header></Header>
          <Screen></Screen>
          <KeyPadCover></KeyPadCover>
        </Container>
        </ThemeProvider>
     
      }
      
      </>
  );    
}

export default App;
