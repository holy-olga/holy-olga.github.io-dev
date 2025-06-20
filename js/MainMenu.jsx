import React from 'react';
import { A } from 'echweb-shared/hookrouter';

export default class MainMenu extends React.Component {
    render() {
        return <div id="mainMenu">
            <div className="cover">
            </div>
            <div className="flexing">
                <h3 className="menuItem">
                    <A href="/c/art">Art</A>
                </h3>
                <h3 className="menuItem">
                    <A href="/c/cv">CV</A>
                </h3>
            </div>
        </div>
    }
}