import React from 'react';
import ParallaxEffect from './parallax';
import olgaLogo from '../kocsiolgalogo2023.svg';
import Vivus from 'vivus';
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'

export default class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parallax: new ParallaxEffect()
        };
        this.mainDiv = React.createRef();
        this.pleaseScroll = React.createRef();
    }

    onSvgReady() {
        this.vivus.play(1, () => this.pleaseScroll.current?.classList.add("visible"));
        let svgDoc = document.querySelector(".olgaLogo");
        this.svg = SVG(svgDoc);
        this.seed = 0;
        setInterval((() => {
            this.seed++;
            let turbulence = this.svg.findOne("#turbulence");
            turbulence.attr("seed", this.seed);
        }).bind(this), 100);
    }

    componentDidMount() {
        this.state.parallax.register(this.mainDiv.current, true);
        this.vivus = new Vivus(
            "olgaLogo2023", {
                file: olgaLogo,
                // type: "oneByOne",
                type: "scenario",
                duration: 540,
                animTimingFunction: Vivus.LINEAR,
                start: "manual",
                onReady: this.onSvgReady.bind(this)
            }
        );
    }

    componentWillUnmount() {
        this.state.parallax.unregister();
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