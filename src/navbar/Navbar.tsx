import {WalletConnector} from "../wallet-connector/WalletConnector.tsx";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleHomeClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        }
    };
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px'}}>
            {location.pathname !== '/' && (
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }}
                    onClick={handleHomeClick}
                >
                    Home
                </button>
            )}
            <WalletConnector/>
        </nav>
    )
}

export default Navbar;
