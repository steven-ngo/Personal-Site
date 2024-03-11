import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const AboutMeTitle = styled.div`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:10%;
  left:-15%;
  transform: translateX(${props => props.scrollPercent * 5.5}%);
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 180px;
  }
  @media ${device.desktop} {
    font-size: 180px;
  }
`;

const AboutMeDescription = styled.div`
  align-items: center;
  font-family: 'AvenirLight';
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
  @media ${device.laptop} {
    transform: translateY(90%);
    font-size: 30px;
  }
  @media ${device.laptopL} {
    transform: translateY(87%);
    font-size: 40px;
  }
  @media ${device.desktop} {
    transform: translateY(80%);
    font-size: 40px;
  }
`;

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      
      <Container>
        <AboutMeTitle scrollPercent={scrollPercent}>ABOUT ME</AboutMeTitle>
        <AboutMeDescription>
          I'm a curious soul with a passion for unraveling the mysteries of code. 
          From tinkering with algorithms to crafting elegant solutions, 
          I'm on a journey to transform my love for coding into impactful creations.
        </AboutMeDescription>
      </Container>
      
    );
  }
}

export default AboutMe;
