import {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar.tsx";
// import {useTonAddress} from "@tonconnect/ui-react";
import {fetchNFTCollection} from '../utils/FetchUtils.ts';

interface Metadata {
    description: string,
    name: string,
    id: number,
    image: string
}

interface Nft {
    metadata: Metadata[]
}

const Tickets = () => {
    // const userFriendlyAddress = useTonAddress();
    const [nftData, setNftData] = useState<Metadata[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetchNFTCollection();
                data = data.nft_items;
                console.log(data);
                const metadata = data.map((nft: Nft) => nft.metadata);
                setNftData(metadata);
                console.log(metadata)
            } catch (error) {
                console.error('Error fetching NFT data:', error);
            }
        };
        fetchData();
    }, []);

    console.log(nftData)

    return (
        <>
            <Navbar/>
            <div>
                <h3>NFT Collection:</h3>
                {nftData && (
                    <div style={{
                        display: 'flex',
                        margin: 'auto',
                        width: 'max-content',
                        gap: '10px'
                    }}>

                        <ul style={{width: '200px'}}>
                            {nftData.map((metadata) => (
                                <li key={metadata.id}>
                                    <h4>{metadata.name}</h4>
                                    <img
                                        src={metadata.image}
                                        alt={metadata.name}
                                        style={{width: '200px', height: '200px'}}
                                    />
                                    <p><strong>Description:</strong> {metadata.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Tickets;
