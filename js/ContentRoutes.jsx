import * as React from 'react';
import DisableWhileResizing from 'echweb-shared/DisableWhileResizing';

const IrmaGraph = React.lazy(() => import('./IrmaGraph/Render'));

export const ContentRoutes = {
    "/irmagraph": () => (
        <React.Suspense fallback={
            <div className="importFallback"><h1 className="glitch big digital">♾️</h1></div>
        }>
            <DisableWhileResizing>
                <IrmaGraph />
            </DisableWhileResizing>
        </React.Suspense>
    )
}

export const ContentRoutesMeta = {
    "/irmagraph": {
        standalone: true
    }
}