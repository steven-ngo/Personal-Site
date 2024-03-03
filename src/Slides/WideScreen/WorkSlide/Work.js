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
        number: 'EXPERIENCE',
        projectName: 'Software Engineer',
        projectDesc: ['• Developed and maintained robust E-commerce API/EDI B2B communication solutions, utilizing protocols such as AS2, SFTP, FTP, HTTPS, and HTTP.',
                      '• Created and maintained robust server-side RESTful APIs to enhance system functionality and performance. ',
                      '• Implemented key features on the company\'s internal web portal, contributing to improved user experience and streamlined processes.',
                      '• Created highly efficient cron job scripts, automating manual tasks and significantly reducing manual intervention.',
                      '• Successfully diagnosed and resolved complex technical issues, applying strong analytical skills and troubleshooting techniques. '],
        projectType: '',
        roles: ['Cenports Commerce Inc.', 'Jan 2021 – May 2023'],
      },
      {
        number: 'EXPERIENCE',
        projectName: 'Software Engineer Intern',
        projectDesc: ['• Developed an efficient cron job script that automated the process of sending daily inventory reports with CSV attachments to subscribers via email.',
                      '• Received positive feedback for the script\'s reliability and effectiveness, contributing to enhanced data reporting and analysis capabilities for users.'],
        projectType: '',
        roles: ['Cenports Commerce Inc.', 'Sep 2020 – Dec 2020'],
      },
      {
        number: 'PROJECT',
        projectName: 'Wayfair API Integration',
        projectDesc: ['• Led end-to-end integration of the Wayfair API into the company\'s systems, establishing a seamless and automated data exchange process between our platform and Wayfair\'s e-commerce platform.',
          '• Designed and implemented custom API endpoints to facilitate real-time retrieval and submission of open-order information, shipment updates, and inventory synchronization with Wayfair.',
          '• Proactively resolved technical challenges, such as handling API rate limits and managing data mapping complexities, to ensure uninterrupted and optimized integration with Wayfair\'s API.',
          '• Recognized for the successful completion of the Wayfair API integration project, contributing to streamlined operations, improved inventory management, and increased sales opportunities for the company.'],
        projectType: '',
        roles: ['Software Developer', 'Cenports 2023'],
      },
      {
        number: 'PROJECT',
        projectName: 'Return Merchandise Center',
        projectDesc: ['• Designed and developed a Return Merchandise Center page on the company\'s internal web portal, providing a centralized platform to manage return orders and streamline the return merchandise process.',
          '• Implemented a comprehensive display of return order information, including order ID, RMA, customer details, and product information, providing a centralized view for efficient tracking and handling.',
          '• Enabled user-friendly editing and image upload functionalities, empowering precise modifications to return order details and comprehensive documentation of return merchandise.'],
        projectType: '',
        roles: ['Software Developer', 'Cenports 2023'],
      },
      {
        number: 'PROJECT',
        projectName: 'C.S. Ellis SFTP Integration',
        projectDesc: ['• Automated data exchange via an SFTP server between our platform and C.S. Ellis, a Logistics and Haulage specialist.',
          '• Developed code to automate the generation and transmission of CSV files for order information, along with PDF transmission of shipping labels and BOL documents to C.S. Ellis.',
          '• Implemented efficient mechanisms to receive shipping information and inventory updates from C.S. Ellis as CSV files, ensuring accurate and up-to-date data synchronization.',
          '• Collaborated closely with C.S. Ellis and internal teams to align integration requirements, troubleshoot issues, and ensure a seamless and reliable automated data exchange process.',
          '• Achieved streamlined order fulfillment and enhanced inventory management capabilities through successful integration with C.S. Ellis, optimizing operational efficiency.'],
        projectType: '',
        roles: ['Software Developer', 'Cenports 2022'],
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
