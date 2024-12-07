import {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar.tsx";
import {fetchNFTCollection} from '../utils/FetchUtils.ts';
import './Ticket.css'
import {useGetNftAddress} from "../utils/GetNftAddress.ts";

interface Metadata {
    description: string;
    name: string;
    id: number;
    image: string;
}

interface Owner {
    address: string
}

interface NftItem {
    metadata: Metadata;
    owner: Owner;
}

const Tickets = () => {
    const [nftData, setNftData] = useState<NftItem[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const {getNftAddress} = useGetNftAddress();
    getNftAddress()?.then(data => console.log(data))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNFTCollection();
                const nftItems: NftItem[] = data.nft_items;
                setNftData(nftItems);
            } catch (error) {
                console.error('Error fetching NFT data:', error);
            }
        };
        fetchData();
    }, []);

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Navbar/>
            //todo
            <div>
                {nftData.length > 0 ? (
                    <div style={{
                        display: 'flex',
                        margin: 'auto',
                        width: '250px',
                        gap: '10px'
                    }}>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            {nftData.map((data) => (
                                <li key={data.metadata.id} style={{marginBottom: '20px', width: '250px'}}>
                                    <h4>{data.metadata.name}</h4>
                                    <img
                                        src={data.metadata.image}
                                        alt={data.metadata.name}
                                        style={{width: '250px', height: '250px', cursor: 'pointer'}}
                                        onClick={() => handleImageClick(data.metadata.image)}
                                    />
                                    <p><strong>Description:</strong> {data.metadata.description}</p>
                                    <p style={{width: '250px'}}>
                                        <strong>Owner: </strong> {`${data.owner.address.substring(0, 5)}...${data.owner.address.substring(data.owner.address.length - 5)}`}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No Tickets available</p>
                )}

                {selectedImage && (
                    <div className="modal_ticket" onClick={closeModal}>
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <img src={selectedImage} alt="Full-size NFT" style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Tickets;
