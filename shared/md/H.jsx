import React from 'react';
import Utils from '../Utils';
import {Gh1, Gh2} from '../Gh';

export default function HExt(props)
{
    let headerText = Utils.getMainTextOfComponent(props.children);
    let anchorText = headerText
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/[^a-z0-9]+$/gi, '')
        .toLowerCase();
    let hprops = {
        ...props
    }
    function H(inprops, inhprops)
    {
        if(inprops.level == 1) return (<Gh1 glitchtype="2" id={anchorText}>{inprops.children}</Gh1>);
        if(inprops.level == 2) return (<Gh2 glitchtype="2" id={anchorText}>{inprops.children}</Gh2>);
        return React.createElement(`h${inhprops.level}`, inhprops, inhprops.children);
    }

    return (
        <>
            <a id={anchorText} className="header-anchor"></a>
            {H(props, hprops)}
        </>
    )
}

window.mdExtensions.h1 = HExt;
window.mdExtensions.h2 = HExt;
window.mdExtensions.h3 = HExt;
window.mdExtensions.h4 = HExt;
window.mdExtensions.h5 = HExt;
window.mdExtensions.h6 = HExt;