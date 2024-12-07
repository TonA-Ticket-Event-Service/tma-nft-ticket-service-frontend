import {useTonClient} from "./useTonClient.ts";
import {Address, ContractProvider} from "ton-core";
import {TonA} from "../../build/TonA/tact_TonA.ts";

export function useGetAllId(address: string) {

    const {client} = useTonClient();
    const to = Address.parse(address);
    const provider: ContractProvider | undefined = client?.provider(to, null);

    return {
        getAllId: () => {
            const tonA = new TonA(to);
            if (!provider) return;
            return tonA.getState(provider);

        }
    }
}