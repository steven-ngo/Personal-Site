import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WayfairProjectImages from './ParallaxImages/WayfairProjectImages';
import ReturnProjectImages from './ParallaxImages/ReturnProjectImages';
import EmptyImages from './ParallaxImages/EmptyImages';
import CsellisProjectImages from './ParallaxImages/CsellisProjectImages';

const ImageContainer = styled.div`
/* border: 0.1px dashed black; */
margin-left:50%;
width:50%;
height:800vh;
display: flex;
flex-flow: column nowrap;
`;

const ImageBox = styled.div`
/* outline: 0.1px dashed green; */
margin-top:40vh;
height: 100vh;
position: relative;
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
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
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
    const { scrollPercent, scrollHeight, screenHeight } = this.state;
    const { pageSplitTimes } = this.props;
    const boxHeight = pageSplitTimes * 100;
    return (
      <ImageContainer>

        <ImageBox height={boxHeight}>
          <EmptyImages
            boxHeight={boxHeight}
            index={1}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <EmptyImages
            boxHeight={boxHeight}
            index={2}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <EmptyImages
            boxHeight={boxHeight}
            index={2}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <WayfairProjectImages
            boxHeight={boxHeight}
            index={3}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <ReturnProjectImages
            boxHeight={boxHeight}
            index={4}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>

       <ImageBox height={boxHeight}>
          <CsellisProjectImages
            boxHeight={boxHeight}
            index={5}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
