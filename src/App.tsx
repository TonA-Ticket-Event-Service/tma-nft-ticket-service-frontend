import './App.css'

import HomePage from "./homePage/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import Tickets from "./tickets/Tickets.tsx";
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import CreateTicketModal from "./createTickets/CreateTicketModal.tsx";

const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

export const App = () => {
    return (
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/ticket" element={<Tickets/>}/>
                <Route path="/create" element={<CreateTicketModal/>}/>
            </Routes>
        </TonConnectUIProvider>
    );
}

export default App;