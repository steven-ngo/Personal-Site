import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import WideScreenHero from './Slides/WideScreen/HeroSlide/Hero';
import WideScreenWork from './Slides/WideScreen/WorkSlide/Work';
import WideScreenSkills from './Slides/WideScreen/Skills';
import Recommendation from './Slides/WideScreen/Recommendation';
import WideScreenContact from './Slides/WideScreen/ContactSlide/Contact';
import MobileWork from './Slides/Mobile/WorkSlide/Work';
import MobileRecommendation from './Slides/Mobile/MobileRecommendation';
import { createGlobalStyle } from 'styled-components';
import './Assets/index.css';


const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
            <WideScreenHero />
            <WideScreenWork />
            <Recommendation />  
            <WideScreenSkills />
            <WideScreenContact />
        </MediaQuery>
        
        <MediaQuery query="(max-device-width: 1224px)">
          <WideScreenHero />
          <MobileWork />
          <WideScreenSkills />
          <MobileRecommendation />
          <WideScreenContact />
        </MediaQuery>
      
        <GlobalStyle />
      
      </React.Fragment>
       
    );
  }
}

export default App;