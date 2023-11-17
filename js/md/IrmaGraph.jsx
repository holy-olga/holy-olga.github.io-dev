import React from 'react';
import MdLazyLoad from 'echweb-shared/MdLazyLoad';
import DisableWhileResizing from 'echweb-shared/DisableWhileResizing';
import IrmaGraph from '../IrmaGraph/Render';
import Utils from 'echweb-shared/Utils';

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

Utils.mdExt.irmagraph = IrmaGraphExt;