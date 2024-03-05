import React, { Component } from 'react';
import styled from 'styled-components';
// import twitterImg from '../../../Assets/Images/Social/twitter.svg';
// import githubImg from '../../../Assets/Images/Social/git.svg';
// import instaImg from '../../../Assets/Images/Social/insta.svg';
// import dribbbleImg from '../../../Assets/Images/Social/dribbble.svg';
import mailImg from '../../../Assets/Images/Social/mail.svg';
import linkedInImg from '../../../Assets/Images/Social/linkedin.svg';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';
import { css } from 'styled-components';

const Container = styled.section`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const ContactTitle = styled.div`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  position: absolute;
  color: #EEE;
  top: 12%;
  left: -70%;

  ${props =>
    css`
      transform: translateX(${props.scrollPercent * 15}%);
    `}

  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= 100) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      
      <Container>
        
        <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
        
        <SocialMediaIcons>
           <SocialLogo imgURL={mailImg} alternate="Mail" redirectURL="mailto:steven@stevenngo.net" />
           <SocialLogo imgURL={linkedInImg} alternate="Linkedin" redirectURL="https://www.linkedin.com/in/stevenngo01" />

           {/* <SocialLogo imgURL={twitterImg} alternate="Twitter" redirectURL="" />
           <SocialLogo imgURL={githubImg} alternate="Github" redirectURL="" />

           <SocialLogo imgURL={instaImg} alternate="Instagram" redirectURL="" />
           <SocialLogo imgURL={dribbbleImg} alternate="Dribbble" redirectURL="" />  */}

         </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;