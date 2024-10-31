
const HomePage = () => {
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
                <button className="button-32">Create tickets</button>
                <button className="button-32">Watch my tickets</button>
            </div>
        </>
    );
}

export default HomePage;