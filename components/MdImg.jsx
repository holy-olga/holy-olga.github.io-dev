import React from 'react';
import ParallaxEffect from './parallax';
import MdFullParallaxWrap from './MdFullParallaxWrap';

export default class MdImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parallax: new ParallaxEffect()
        };
        this.mainImg = React.createRef();
    }
    componentDidMount() {
        let alt = this.props.alt ?? "";
        let isParallax = alt.includes("md.parallax") || alt.includes("force-parallax");

        if(isParallax)
            this.state.parallax.register(this.mainImg.current);
    }

    render() {
        let alt = 'alt' in this.props ? this.props.alt : "";
        let captioned = alt.split("caption: ");
        let noBlur = alt.includes("no-blur");
        let parallaxCoeff = /parallax-coeff:(?<coeff>[\d\.]+)/.exec(alt)?.groups;
        let optionals = {};

        if (parallaxCoeff?.coeff) {
            optionals = {...optionals, parallaxcoeff: parseFloat(parallaxCoeff.coeff)};
        }
        if(alt.search("md.full") >= 0)
        {
            return (<div className="mdCaptionWrap">
                <MdFullParallaxWrap noblur={noBlur} {...optionals}>
                    <img {...this.props}/>
                </MdFullParallaxWrap>
                {
                    captioned.length > 1
                    ? (<>
                        <div className="imgCaptionPre"></div>
                        <span className="imgCaption">{captioned[1]}</span>
                        <div className="imgCaptionPost"></div>
                    </>) : <></>
                }
            </div>);
        }
        else
        {
            return <img ref={this.mainImg} {...this.props} {...optionals} />;
        }
    }
}