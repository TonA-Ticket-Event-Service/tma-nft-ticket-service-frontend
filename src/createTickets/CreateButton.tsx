import {useCreateJettonContract} from "../utils/CreateTicket.ts";

const CreateButton = (props: { address: string; }) => {
    const address = props.address;
    const { create } = useCreateJettonContract(address);

    return (
        <>
            <button className="button-32" onClick={create}>Create</button>
        </>
    )
}

export default CreateButton;