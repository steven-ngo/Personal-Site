import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WayfairIntegration from '../../../../Assets/Images/WayfairIntegration/WayfairIntegration.png';

const WayfairFlowChart = styled.img`
transform: translate(0px, -${props => props.scroll * 5}%)  scale(0.8);
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

class WayfairProjectImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <WayfairFlowChart src={WayfairIntegration} scroll={scrollPercent} alt="WayfairFlowChart" />
      </React.Fragment>
    );
  }
}

WayfairProjectImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WayfairProjectImages;
