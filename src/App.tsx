import './App.css'

import HomePage from "./homePage/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import Tickets from "./tickets/Tickets.tsx";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ticket" element={<Tickets/>}/>
        </Routes>
    );
}

export default App;