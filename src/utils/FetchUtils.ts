export async function fetchNFTCollection() {
    const url = 'https://tonapi.io/v2/nfts/collections/0%3A120670d2c4cba5fb9a57971b8a30cf3f363f309e4da3b496318ff44e9ec4b6b8/items?limit=40&offset=0';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('NFT Collection Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching NFT collection:', error);
        throw error;
    }
}
