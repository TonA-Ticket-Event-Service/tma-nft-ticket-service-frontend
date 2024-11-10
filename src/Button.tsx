import {useJettonContract} from "./utils/MintTicket.ts";

const Button = (props: { address: string; }) => {
    const address = props.address;
    const { mint } = useJettonContract(address);

    return (
        <>
            <button className="button-32" onClick={mint}>Mint available NFT</button>
        </>
    )
}

export default Button;