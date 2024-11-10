import {Address, OpenedContract, toNano, Cell} from "ton-core";
import {EventNftCollection, Mint} from "../../build/TonA/tact_EventNftCollection.ts";
import {useAsyncInitialize} from "./useAsyncInitialize";
import {useTonClient} from "./useTonClient";
import {useTonConnect} from "./useTonConnect";
import {encodeOffChainContent} from "./contentHelper.ts";


export function useJettonContract(address: string) {
    if (address.length === 0) {
        return {
            mint: () => {

            }
        }
    }
    const {client} = useTonClient()
    const {wallet, sender} = useTonConnect()
    const jettonContract = useAsyncInitialize<OpenedContract<EventNftCollection> | undefined>(async () => {
        if (!client || !wallet) return undefined;

        const contract = EventNftCollection.fromAddress(Address.parse("EQD_-jeVGKbFprZSDyEU9jutJqZEOs7XMadMZ5k4nlUbPBsl"));

        return client.open(contract) as OpenedContract<EventNftCollection>;
    }, [client, wallet]);

    console.log(address)
    const to = Address.parse(address);

    const ticketContentLink = 'https://raw.githubusercontent.com/TonA-Ticket-Event-Service/images/refs/heads/main/event.json'
    const ticketContentOnchainData: Cell = encodeOffChainContent(ticketContentLink)

    return {
        jettonWalletAddress: "EQD_-jeVGKbFprZSDyEU9jutJqZEOs7XMadMZ5k4nlUbPBsl",
        mint: () => {
            const message: Mint = {
                $$type: 'Mint',
                to: to,
                individual_content: ticketContentOnchainData,
            }

            jettonContract?.send(sender, {
                value: toNano("0.1")
            }, message)
        }
    }
}