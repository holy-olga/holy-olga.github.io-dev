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
        let alt = 'alt' in this.props ? this.props.alt : "";
        let isParallax = alt.search("md.parallax") >= 0;

        if(isParallax)
            this.state.parallax.register(this.mainImg.current);
    }

    componentWillUnmount() {
        this.state.parallax.unregister();
    }

    render() {
        let alt = 'alt' in this.props ? this.props.alt : "";
        let captioned = alt.split("caption: ");
        let noBlur = alt.includes("no-blur");
        if(alt.search("md.full") >= 0)
        {
            return (<div className="mdCaptionWrap">
                <MdFullParallaxWrap noblur={noBlur}>
                    <img {...this.props} />
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
            return <img ref={this.mainImg} {...this.props} />;
        }
    }
}