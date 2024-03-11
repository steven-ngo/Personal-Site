import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.div`
    height: 80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const RecTitle = styled.div`
  transform: translateX(-${props => props.scrollPercent * 6}%);
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:40%;
  right:-50%;
  @media ${device.laptop} {
    font-size: 130px;
  }
  @media ${device.laptopL} {
    font-size: 130px;
  }
  @media ${device.desktop} {
    font-size: 130px;
  }
`;

class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenHeight: 0,
            scrollHeight: 0,
            scrollPercent: 0,
            widgetAppended: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
        this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });


        if (!this.state.widgetAppended) { // Check if the widget script is already appended
            const script = document.createElement('script');
            script.src = 'https://widgets.sociablekit.com/linkedin-recommendations/widget.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);

            this.setState({ widgetAppended: true }); // Update the state to indicate that the widget script is appended
        }
    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.handleScroll);

    }

    handleScroll(event) {
        const { body, documentElement } = event.srcElement;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
        const minlimit = (documentElement.clientHeight * 950) / documentElement.scrollHeight;
        const maxlimit = (documentElement.clientHeight * 1180) / documentElement.scrollHeight;
        if (sp >= minlimit && sp <= maxlimit + 3) {
            sp -= minlimit;
            this.setState({ scrollPercent: sp });
        }
    }

    render() {
        const { scrollPercent } = this.state;
        return (
            <Container>
                {/* <RecTitle scrollPercent={scrollPercent}>Recommendation</RecTitle>
                <div className="sk-ww-linkedin-recommendations" data-embed-id="164541"></div> */}
            </Container>
            

        );
    }
}

export default Recommendation;

