import React, {useState} from 'react';
import './CreateComponentModal.css';

interface Ticket {
    name: string;
    description: string;
    count: number;
    image: File | null;
}

const CreateTicketModal = () => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [count, setCount] = useState<number>(1);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("!!!!")
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create New Ticket</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="count">Count:</label>
                        <input
                            type="number"
                            id="count"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            min={1}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            // onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                        />
                    </div>

                    <div className="form-group button-group">
                        <button className="button-32" type="submit">Create Ticket</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTicketModal;
