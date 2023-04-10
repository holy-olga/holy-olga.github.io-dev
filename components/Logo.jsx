import React from 'react';
import ParallaxEffect from './parallax';
import olgaLogo from '../kocsiolgalogo2023.svg';
import Vivus from 'vivus';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parallax: new ParallaxEffect()
        };
        this.mainDiv = React.createRef();
        this.pleaseScroll = React.createRef();
    }

    componentDidMount() {
        this.state.parallax.register(this.mainDiv.current);
        this.vivus = new Vivus(
            "olgaLogo2023", {
                file: olgaLogo,
                // type: "oneByOne",
                type: "scenario",
                duration: 540,
                animTimingFunction: Vivus.LINEAR,
                start: "manual",
                onReady: (() => {
                    this.vivus.play(1, () => this.pleaseScroll.current.classList.add("visible"));
                }).bind(this)
            }
        );
    }

    render() {
        let divcontainerStyle = {
            height: "100%"
        };
        return (
            <div className="logo">
                <div ref={this.pleaseScroll} className="pleaseScroll">
                    <div className="indicator">
                    </div>
                </div>
                <div ref={this.mainDiv} style={divcontainerStyle}>
                    <div id="olgaLogo2023" style={{ filter: "invert(1)"}} />
                </div>
            </div>
        );
    }
}