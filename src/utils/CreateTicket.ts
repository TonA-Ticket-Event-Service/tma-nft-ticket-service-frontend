import {Address, OpenedContract, toNano, Cell} from "ton-core";
import {CreateEvent, TonA} from "../../build/TonA/tact_TonA.ts";
import {useAsyncInitialize} from "./useAsyncInitialize";
import {useTonClient} from "./useTonClient";
import {useTonConnect} from "./useTonConnect";
import {encodeOffChainContent} from "./contentHelper.ts";


export function useCreateJettonContract(address: string) {
    if (address.length === 0) {
        return {
            create: () => {

            }
        }
    }
    const {client} = useTonClient()
    const {wallet, sender} = useTonConnect()
    const jettonContract = useAsyncInitialize<OpenedContract<TonA> | undefined>(async () => {
        if (!client || !wallet) return undefined;

        const contract = TonA.fromAddress(Address.parse("EQCcGod9cXbiIXUvqVneGJeluzGBY4pHX3a1HpDVVsdEr2_c"));

        return client.open(contract) as OpenedContract<TonA>;
    }, [client, wallet]);

    console.log(address)
    const to = Address.parse(address);

    const ticketContentLink = 'https://raw.githubusercontent.com/TonA-Ticket-Event-Service/images/refs/heads/main/event.json'
    const ticketPrice = toNano('0.001')
    const ticketContentOnchainData: Cell = encodeOffChainContent(ticketContentLink)

    return {
        create: () => {
            const message: CreateEvent = {
                $$type: 'CreateEvent',
                organizer_address: to,
                ticket_price: ticketPrice,
                event_content: ticketContentOnchainData,
            }

            jettonContract?.send(sender, {
                value: toNano("0.5")
            }, message)
        }
    }
}