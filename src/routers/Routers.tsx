import {Routes, Route} from "react-router-dom";
import HomePage from "../homePage/HomePage.tsx";
import Tickets from "../tickets/Tickets.tsx";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ticket" element={<Tickets/>}/>
        </Routes>
    );
}

export default Routers;