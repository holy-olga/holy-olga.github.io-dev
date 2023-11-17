import React from 'react';
import MdLazyLoad from '../MdLazyLoad';
import { MdLinkHandler, GetMdUrl } from '../MdLinkHandler';
import MdCompare from '../MdCompare';

export default function MdCompareExt(props)
{
    let ls = GetMdUrl(props.ls);
    let rs = GetMdUrl(props.rs);
    let passAttribs = {...props};
    delete passAttribs.ls;
    delete passAttribs.rs;
    return (
        <MdLazyLoad>
            <MdCompare ls={ls.url} rs={rs.url} {...passAttribs} />
        </MdLazyLoad>
    );
}

window.mdExtensions.comparemd = MdCompareExt;
window.mdExtensions.mdcompare = MdCompareExt;