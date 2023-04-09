import React from 'react';
import ParallaxEffect from './parallax';
import olgaLogo from '../kocsiolgalogo2023.svg';
import { ReactVivus } from 'react-vivus';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parallax: new ParallaxEffect()
        };
        this.mainDiv = React.createRef();
    }

    componentDidMount() {
        this.state.parallax.register(this.mainDiv.current);
    }

    render() {
        let divcontainerStyle = {
            height: "100%"
        };
        return (
            <div className="logo">
                <div className="pleaseScroll">
                    <div className="indicator">
                    </div>
                </div>
                <div ref={this.mainDiv} style={divcontainerStyle}>
                    <img src={olgaLogo} style={{ filter: "invert(1)"}}/>
                </div>
            </div>
        );
    }
}