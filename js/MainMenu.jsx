import React from 'react';
import { A } from 'echweb-shared/hookrouter';

export default class MainMenu extends React.Component {
    render() {
        return <div id="mainMenu">
            <div className="cover">
            </div>
            <div className="flexing">
                <h2 className="menuItem">
                    <A href="/c/news">News</A>
                </h2>
                <h2 className="menuItem">
                    <A href="/c/projects">Projects</A>
                </h2>
                <h2 className="menuItem">
                    <A href="/c/exhibitions">Exhibitions</A>
                </h2>
                <h2 className="menuItem">
                    <A href="/c/misc">Misc</A>
                </h2>
                <h2 className="menuItem">
                    <A href="/c/cv">CV</A>
                </h2>
            </div>
        </div>
    }
}