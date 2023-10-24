import React from 'react';
import { render } from 'react-dom';
import IrmaGraph from './art/IrmaGraph/Render';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
    useNavigate,
    useLocation,
    useSearchParams
} from 'react-router-dom';

import App from './App';
import Home from './Home';
import { RoutedMdArticle } from './MdArticle';
import PageNotFound from './PageNotFound';

function EntryPoint() {
    let [searchParams, setSearchParams] = useSearchParams();
    let redirectToEncoded = searchParams.get("redirect");
    let location = useLocation();


    document.title = `Olga Kocsi ${location.pathname}`;

    if(redirectToEncoded) {
        return <Navigate to={decodeURIComponent(redirectToEncoded)} replace />
    } else {
        return (
            <App intro={location.pathname === "/"} >
                <Outlet />
            </App>
        )
    }
}

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<EntryPoint />} >
                <Route index element={<Home />} />
                <Route path="graph-test" element={<IrmaGraph />} />
                <Route path="c/*" element={<RoutedMdArticle />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)