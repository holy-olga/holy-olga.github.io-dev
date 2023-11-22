import React from 'react';
import MdLazyLoad from 'echweb-shared/MdLazyLoad';
import DisableWhileResizing from 'echweb-shared/DisableWhileResizing';
import Utils from 'echweb-shared/Utils';
import {Gh1, Gh2} from 'echweb-shared/Gh';

const IrmaGraph = React.lazy(() => import('../IrmaGraph/Render'));

export default function IrmaGraphExt(props)
{
    return (
        <MdLazyLoad>
            <React.Suspense fallback={
                <div className="mdpdf invalid"><Gh1 glitchtype={1}>♾️</Gh1></div>
            }>
                <DisableWhileResizing>
                    <IrmaGraph />
                </DisableWhileResizing>
            </React.Suspense>
        </MdLazyLoad>
    )
}

Utils.mdExt.irmagraph = IrmaGraphExt;