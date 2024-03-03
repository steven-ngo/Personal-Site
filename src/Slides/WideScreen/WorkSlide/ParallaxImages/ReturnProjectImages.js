import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReturnCenter from '../../../../Assets/Images/ReturnCenter/ReturnCenter.png';

const ReturnCenterImg = styled.img`
transform: translate(0px, -${props => props.scroll * 5}%) scale(0.7);
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;


class ReturnProjectImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <ReturnCenterImg src={ReturnCenter} scroll={scrollPercent} alt="ReturnCenterImg" />
      </React.Fragment>
    );
  }
}

ReturnProjectImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ReturnProjectImages;
