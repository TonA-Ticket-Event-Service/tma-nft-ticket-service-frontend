import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar.tsx";
import { fetchNFTCollection } from '../utils/FetchUtils.ts';
import './Ticket.css'

interface Metadata {
    description: string;
    name: string;
    id: number;
    image: string;
}

interface NftItem {
    metadata: Metadata;
}

const Tickets = () => {
    const [nftData, setNftData] = useState<Metadata[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNFTCollection();
                const nftItems: NftItem[] = data.nft_items;
                const metadataList = nftItems.map((item: NftItem) => item.metadata);
                setNftData(metadataList);
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
            <Navbar />
            <div>
                <h3>NFT Collection:</h3>
                {nftData.length > 0 ? (
                    <div style={{
                        display: 'flex',
                        margin: 'auto',
                        width: '200px',
                        gap: '10px'
                    }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {nftData.map((metadata) => (
                                <li key={metadata.id} style={{ marginBottom: '20px' }}>
                                    <h4>{metadata.name}</h4>
                                    <img
                                        src={metadata.image}
                                        alt={metadata.name}
                                        style={{ width: '200px', height: '200px', cursor: 'pointer' }}
                                        onClick={() => handleImageClick(metadata.image)}
                                    />
                                    <p><strong>Description:</strong> {metadata.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No Tickets available</p>
                )}

                {selectedImage && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <img src={selectedImage} alt="Full-size NFT" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Tickets;
