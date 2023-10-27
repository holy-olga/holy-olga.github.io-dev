import React from 'react';
import ParallaxEffect from './parallax';

export default class MdFullParallaxWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parallax: new ParallaxEffect()
        };
        this.mainDiv = React.createRef();
        this.mainContent = React.createRef();
    }
    
    componentDidMount() {
        this.state.parallax.register(this.mainContent.current);
    }

    componentWillUnmount() {
        this.state.parallax.unregister();
    }

    render() {
        
        if (this.props.noblur) {
            return (
                <div ref={this.mainDiv} className="md-full" style={{
                    backgroundColor: "black",
                }} >
                    <div ref={this.mainContent}>
                        {this.props.children}
                    </div>
                </div>
            );
        }

        let firstChild = ("props" in this.props.children)
            ? this.props.children
            : this.props.children[0];
            
        let blurredChildren = React.cloneElement(
            firstChild,
            {
                ...firstChild.props,
                style: {
                    position: "absolute",
                    filter: "blur(40px)"
                }
            }
        );
        return (
            <div ref={this.mainDiv} className="md-full" style={{
                backgroundColor: "black",
            }} >
                {blurredChildren}
                <div ref={this.mainContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}