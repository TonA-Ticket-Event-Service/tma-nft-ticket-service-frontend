import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom';

import WebApp from '@twa-dev/sdk'
import App from "./App.tsx";

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
,
)

//TODO
// 1. add test logic for fetch nft
// 2. think about logic, how to better create tickets
// 3. discuss with Vakhtanh about integrate smart contract in TMA
// 4. integrate it