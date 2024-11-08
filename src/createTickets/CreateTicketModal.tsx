import {useState} from 'react';
import './CreateComponentModal.css';

const CreateTicketModal = () => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [count, setCount] = useState<number>(25);

    const handleSubmit = () => {
        console.log("!!!!")
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create New Ticket</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label style={{fontSize: '18px'}} htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label style={{fontSize: '18px'}} htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label  style={{fontSize: '18px'}} htmlFor="image">Image:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            required
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
