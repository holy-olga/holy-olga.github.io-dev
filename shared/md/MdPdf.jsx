import React from 'react';
import MdLazyLoad from '../MdLazyLoad';
import { MdLinkHandler, GetMdUrl } from '../MdLinkHandler';
import {Gh1, Gh2} from '../Gh';
import MdPdf from '../MdPdf';

export default function MdPdfExt(props)
{
    let {url, isFile, isDomain} = GetMdUrl(props.href);
    let passProps = {...props};
    delete passProps.href;
    if(isFile || !isDomain) return (
        <MdLazyLoad>
            <MdPdfRoot href={url} {...passProps} />
        </MdLazyLoad>
    );
    return (
        <div className="mdpdf invalid"><Gh1 glitchtype={1}>❌</Gh1></div>
    )
}

window.mdExtensions.pdfmd = MdPdfExt;
window.mdExtensions.mdpdf = MdPdfExt;