import React from 'react';
import MdLazyLoad from '../MdLazyLoad';
import IframeWrapper from '../IframeWrapper';

export default function IFrameExt(props)
{
    return <MdLazyLoad>
        <IframeWrapper {...props} />
    </MdLazyLoad>
}

window.mdExtensions.iframe = IFrameExt;