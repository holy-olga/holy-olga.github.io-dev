import React from 'react';
import { Link } from 'react-router-dom';
import {Gh1, Gh2} from 'echweb-shared/Gh';

export default class MainMenu extends React.Component {
    render() {
        return <div id="mainMenu">
            <div className="cover">
            </div>
            <div className="flexing">
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/news">News</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/projects">Projects</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/exhibitions">Exhibitions</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/misc">Misc</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="1" className="menuItem">
                    <Link to="/c/cv">CV</Link>
                </Gh2>
            </div>
        </div>
    }
}