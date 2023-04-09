import React from 'react';
import { Link } from 'react-router-dom';
import {Gh1, Gh2} from './Gh';

export default class MainMenu extends React.Component {
    render() {
        return ( <div id="mainMenu">
            <div className="cover">
            </div>
            <div className="flexing">
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/log">News</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/works">Projects</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/ware">Exhibitions</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/about">Teaching</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/cv">CV</Link>
                </Gh2>
            </div>
        </div> )
    }
}