import React from 'react';
import MdComment from '../MdComment';
import PathContext from '../MdArticleContext';

export default function MdCommentExt(props)
{
    const path = useContext(PathContext)
    return <MdComment term={path.webPath} />;
}

window.mdExtensions.commentmd = MdCommentExt;
window.mdExtensions.mdcomment = MdCommentExt;