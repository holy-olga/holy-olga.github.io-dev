import React from 'react';
import MdLazyLoad from 'echweb-shared/MdLazyLoad';
import DisableWhileResizing from 'echweb-shared/DisableWhileResizing';
import IrmaGraph from '../IrmaGraph/Render';

export default function IrmaGraphExt(props)
{
    return (
        <MdLazyLoad>
            <DisableWhileResizing>
                <IrmaGraph />
            </DisableWhileResizing>
        </MdLazyLoad>
    )
}

window.mdExtensions.irmagraph = IrmaGraphExt;