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
        <nav style={{
            display: location.pathname !== '/' ? 'flex' : 'block',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px'
        }}>
            {location.pathname !== '/' && (
                <button className="button-32" style={{width: 'max-content'}} onClick={handleHomeClick}>
                    Home
                </button>
            )}
            <WalletConnector/>
        </nav>
    )
}

export default Navbar;
