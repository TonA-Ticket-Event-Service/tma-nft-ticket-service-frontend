import {useState} from 'react';
import './CreateComponentModal.css';
import Navbar from "../navbar/Navbar.tsx";
import {useTonAddress} from "@tonconnect/ui-react";
import CreateButton from "./CreateButton.tsx";

const CreateTicketModal = () => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const userFriendlyAddress = useTonAddress();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("!!!!")
    };


    return (
        <>
            <Navbar/>
            <div className="modal">
                <div className="modal-content">
                    <h2>Create New Ticket</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label style={{fontSize: '14px'}} htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label style={{fontSize: '14px'}} htmlFor="description">Description:</label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label style={{fontSize: '14px'}} htmlFor="image">Image:</label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                required
                                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                            />
                        </div>

                        <CreateButton address={userFriendlyAddress}/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateTicketModal;
