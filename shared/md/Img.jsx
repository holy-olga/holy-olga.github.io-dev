import React from 'react';
import MdLazyLoad from '../MdLazyLoad';
import MdImg from '../MdImg';

export default function ImgExt(props)
{
    return <MdLazyLoad>
        <MdImg {...props} />
    </MdLazyLoad>
}

window.mdExtensions.img = ImgExt;