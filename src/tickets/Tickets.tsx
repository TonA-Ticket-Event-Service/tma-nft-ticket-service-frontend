import Navbar from "../navbar/Navbar.tsx";
import {useTonAddress} from "@tonconnect/ui-react";

const Tickets = () => {
    const userFriendlyAddress = useTonAddress();

    return (
        <>
            <Navbar/>
            <div>
                <span>Connected address: {userFriendlyAddress}</span>
            </div>
        </>
    )
}

export default Tickets;