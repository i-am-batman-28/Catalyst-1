import './heading.css';
function Catalyst() {
    return (
        <div className="catalyst-heading-container">
            <div className="catalyst-subtitle">IIIT Sri City Presents</div>
            <h1 className="catalyst-title">Catalyst</h1>
            <div className="catalyst-tagline">
                <span>Ignite</span>
                <span className="divider" aria-hidden="true">|</span>
                <span>Accelerate</span>
                <span className="divider" aria-hidden="true">|</span>
                <span>Achieve</span>
            </div>
        </div>
    );
}

export default Catalyst;