import Navbar from "../navbar/Navbar.tsx";
import {useTonAddress, useTonWallet} from "@tonconnect/ui-react";

const Tickets = () => {
    const userFriendlyAddress = useTonAddress();
    const dada = useTonWallet();
    // dada?.account.address.


    console.log(dada)
    console.log("----------")
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