import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import Logo from './Logo';
import MainScrollbar from './MainScrollbar';
import SvgFilters from './SvgFilters';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { children, intro } = this.props;

        return <>
            <SvgFilters />
            <div id="appRoot">
                {intro ? <Logo /> : <div style={{display: "none"}} />}
                {intro ? <></> : <h1
                    className="h0"
                    id="mcrode"
                    style={{
                        marginTop: "0px",
                        marginBottom: "-10px"
                    }}
                >
                    <Link to="/">Olga Kocsi</Link>
                </h1>}
                <MainMenu />
                {children}
                <div id="footer"></div>
                <MainScrollbar />
            </div>
        </>;
    }
}
    