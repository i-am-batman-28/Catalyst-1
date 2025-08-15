import React from 'react';
import './LearnMore.css';
import CornerLogo from '../CornerLogo/CornerLogo.jsx';

function LearnMore() {
    return (
        <div className="learn-more-page">
            <CornerLogo />
            <div className="learn-more-container">
                <div className="hero-section">
                    <h1 className="event-title">Catalyst'25</h1>
                    <p className="event-subtitle">-IIIT Sri City</p>
                    
                    <div className="event-description">
                        <p className="main-description">
                            Catalyst'25 by IIIT Sri City celebrates the spirit of entrepreneurship. 
                            We empower early-stage startups and students to turn innovative ideas into reality.
                        </p>
                        
                        <div className="highlight-section">
                            <h2>Why Catalyst'25?</h2>
                            <div className="benefits-grid">
                                <div className="benefit-card">
                                    <div className="benefit-icon">🏆</div>
                                    <h3>Top 3 Winners</h3>
                                    <p>Get to participate in Eureka 2025 by IIT Bombay</p>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon">💡</div>
                                    <h3>Connect with Investors</h3>
                                    <p>Network with industry leaders and potential investors</p>
                                </div>
                                <div className="benefit-card">
                                    <div className="benefit-icon">🎯</div>
                                    <h3>Learn from Mentors</h3>
                                    <p>Gain insights from experienced entrepreneurs and mentors</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="call-to-action">
                            <h2>Your NEXTLEAP Awaits</h2>
                            <p className="cta-description">
                                Join us to ignite your startup journey. This is your NEXTLEAP to build and lead your dreams.
                            </p>
                            <div className="cta-buttons">
                                <a
                                    className="btn-primary"
                                    href="https://forms.gle/gtR6BaHX4zwGVMR59"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Timeline removed as requested */}
            </div>
        </div>
    );
}

export default LearnMore;
