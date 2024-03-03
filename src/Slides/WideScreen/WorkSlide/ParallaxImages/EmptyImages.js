import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Empty from '../../../../Assets/Images/Empty/Empty.png';


const EmptyImg = styled.img`
transform: translate(0px, -${props => props.scroll * 17}%) scale(0.7);
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
left: 0vw;
/* border: 1px dashed red; */
height: 80vh;
`;

class EmptyImages extends Component {
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
        <EmptyImg src={Empty} scroll={scrollPercent} alt="Empty" />
      </React.Fragment>
    );
  }
}

EmptyImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default EmptyImages;
