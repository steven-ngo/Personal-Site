import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FlowChart from '../../../../Assets/Images/CSEllis/FlowChart.png';

const ProjectFlowChart = styled.img`
transform: translate(0px, -${props => props.scroll * 8}%)  scale(0.9);
transition: transform 0.2s ease-out;
position: absolute;
bottom: -140vh;
left:2vw;
/* border: 1px dashed red; */
filter: blur(0.6px);
height: 80vh; 
`;


class CsellisProjectImages extends Component {
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
        <ProjectFlowChart src={FlowChart} scroll={scrollPercent} alt="ProjectFlowChart" />
      </React.Fragment>
    );
  }
}

CsellisProjectImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default CsellisProjectImages;
