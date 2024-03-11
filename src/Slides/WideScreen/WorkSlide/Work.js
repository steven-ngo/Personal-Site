import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: [''],
        projectType: '',
        roles: [''],
      },
      {
        number: '',
        projectName: 'Journey into Programming',
        projectDesc: ['• My programming journey was sparked by a childhood passion for video games and a desire to understand how they worked. This passion led me to join the Computer Science Club in high school, where I first dipped my toes into the realm of coding. ',
          '• What I find most exciting about programming is its potential to create applications and programs that can have a positive impact on people\'s lives.',
          '• Through self-study, coding courses, and hands-on projects, I honed my skills and deepened my understanding of backend development, web technologies, and database management.'],
        projectType: '',
        roles: [''],
      },
      {
        number: 'EXPERIENCE',
        projectName: 'Technical Support Engineer',
        projectDesc: ['• Integrated clients with our software via EDI/API.',
                      '• Created scripts to automate manual tasks, significantly reducing manual intervention.',
                      '• Provided daily technical support.'],
        projectType: '',
        roles: ['Cenports Commerce Inc.', 'Jan 2021 – May 2023'],
      },
      {
        number: 'EXPERIENCE',
        projectName: 'Technical Support Engineer Intern',
        projectDesc: ['• Handled technical support tickets.',
                      '• Wrote technical documentation.'],
        projectType: '',
        roles: ['Cenports Commerce Inc.', 'Sep 2020 – Dec 2020'],
      },
      {
        number: 'Personal Project',
        projectName: 'Ecommerce APIs',
        projectDesc: ['• Developed RESTful APIs for managing orders, products, and shipments using Laravel framework and MySQL database.',
                      '• https://github.com/steven-ngo/Ecommerce-APIs'],
        projectType: '',
        roles: [''],
      },
      {
        number: 'Personal Project',
        projectName: 'Encrypt/Decrypt Web Application',
        projectDesc: ['• Created a secure web application for encrypting and decrypting text using PHP and various encryption ciphers.',
                      '• https://github.com/steven-ngo/Encrypt-Decrypt-PHP-Web'],
        projectType: '',
        roles: [''],
      },
      {
        number: 'Personal Project',
        projectName: 'Mancala Game Desktop App',
        projectDesc: ['• Built a virtual adaptation of the Mancala board game using Java and the MVC architectural pattern.',
                      '• https://github.com/steven-ngo/Mancala-Java-Game-App'],
        projectType: '',
        roles: [''],
      },
      {
        number: '',
        projectName: '',
        projectDesc: [''],
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
