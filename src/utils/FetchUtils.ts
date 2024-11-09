export async function fetchNFTCollection() {
    const url = 'https://tonapi.io/v2/nfts/collections/0%3Afffa379518a6c5a6b6520f2114f63bad26a6443aced731a74c6799389e551b3c/items?limit=40&offset=0\n';

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
