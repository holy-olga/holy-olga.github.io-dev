import React from 'react';
import MdLazyLoad from 'echweb-shared/MdLazyLoad';
import DisableWhileResizing from 'echweb-shared/DisableWhileResizing';
import Utils from 'echweb-shared/Utils';

const IrmaGraph = React.lazy(() => import('../IrmaGraph/Render'));

export default function IrmaGraphExt(props)
{
    return (
        <MdLazyLoad>
            <React.Suspense fallback={
                <div className="importFallback"><h1 className="glitch big digital">♾️</h1></div>
            }>
                <DisableWhileResizing>
                    <IrmaGraph className="mdFull"/>
                </DisableWhileResizing>
            </React.Suspense>
        </MdLazyLoad>
    )
}

Utils.mdExt.irmagraph = IrmaGraphExt;