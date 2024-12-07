import {useGetAllId} from "./GetId.ts";
import {useState} from "react";
import {Address, ContractProvider} from "ton-core";
import {TonA} from "../../build/TonA/tact_TonA.ts";
import {useTonClient} from "./useTonClient.ts";

export function useGetNftAddress() {

    const address = Address.parse('EQCcGod9cXbiIXUvqVneGJeluzGBY4pHX3a1HpDVVsdEr2_c');
    const { getAllId } = useGetAllId('EQCcGod9cXbiIXUvqVneGJeluzGBY4pHX3a1HpDVVsdEr2_c');
    const {client} = useTonClient();
    const provider: ContractProvider | undefined = client?.provider(address, null);

    const [id, setId] = useState(0n);
    if (getAllId) {
        getAllId()?.then(data => setId(data?.total_events));
    }

    return {
        getNftAddress: () => {
            const tonA = new TonA(address);
            if (!provider) return;
            return tonA.getGetNftCollectionAddress(provider, id);
        }
    }
}