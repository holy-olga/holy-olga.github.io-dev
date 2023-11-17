import React from 'react';
import MdArticle from '../MdArticle';

export default function MdNextExt(props)
{
    return <MdArticle path={props.href} />;
}

window.mdExtensions.mdnext = MdNextExt;
window.mdExtensions.nextmd = MdNextExt;
window.mdExtensions.mdinsert = MdNextExt;
window.mdExtensions.insertmd = MdNextExt;