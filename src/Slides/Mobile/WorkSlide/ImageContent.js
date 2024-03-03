import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vhCheck from 'vh-check';

const ImageContainer = styled.div`
/* border: 0.1px dashed black; */
width:100%;
height:900vh;
margin-bottom:30vh;
display: flex;
flex-flow: column nowrap;
`;


class ImageContent extends Component {
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
    const vhDiff = vhCheck().offset;
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState(
      { screenHeight: Math.round(window.document.documentElement.clientHeight + vhDiff) },
    );
    console.log('scrollHeight', Math.round(window.document.documentElement.scrollHeight));
    console.log('screenHeight', Math.round(window.document.documentElement.clientHeight));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { body, documentElement } = window.document;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    return (
      <ImageContainer>

      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
