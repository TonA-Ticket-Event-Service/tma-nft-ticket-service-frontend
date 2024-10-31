import WebApp from '@twa-dev/sdk'

const HomePage = () => {
    const handleCreateTicket = () => {
        WebApp.showAlert('Simulate create')
    };

    const handleWatchTicket = () => {
        WebApp.showAlert('Simulate show all tickets')
    };
    return (
        <>
            <h1>NFT HOT EXAMPLE</h1>
            <span>You can choose</span>
            <div style={{
                display: 'flex',
                margin: 'auto',
                width: 'max-content',
                gap: '10px'
            }}>
                <button className="button-32" onClick={handleCreateTicket}>Create tickets</button>
                <button className="button-32" onClick={handleWatchTicket}>Watch my tickets</button>
            </div>
        </>
    );
}

export default HomePage;