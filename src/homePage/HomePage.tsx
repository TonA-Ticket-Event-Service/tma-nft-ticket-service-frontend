import Navbar from "../navbar/Navbar.tsx";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const handleCreateTicket = () => {
        navigate('/create');
    };

    const handleWatchTicket = () => {
        navigate('/ticket');
    };
    return (
        <>
            <Navbar/>
            <h1>NFT HOT EXAMPLE</h1>
            <span>You can choose</span>
            <div style={{
                display: 'flex',
                margin: 'auto',
                width: 'max-content',
                gap: '10px'
            }}>
                <button className="button-32" onClick={handleCreateTicket}>Create tickets</button>
                <button className="button-32" onClick={handleWatchTicket}>Watch my tickets</button>
            </div>
        </>
    );
}

export default HomePage;