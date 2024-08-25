// src/components/Sidebar.js
import React from 'react';
import '../../styles/navbar/sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="close-btn" onClick={toggleSidebar}>
                &times;
            </div>
            <div className="sidebar-content">
                <div className="sidebar-header">
                    <h1>BrainBkt</h1>
                    <p>We are a creative studio that empowers businesses with visually compelling and impactful designs.</p>
                    <hr />
                </div>
                <div className="sidebar-contact">
                    <p>878 Oberting Rd,</p>
                    <p>Greendale, IN 47025</p>
                    <p>+1 812 577 3445</p>
                    <p>brainbkt@gmail.com</p>
                </div>
                <div className="sidebar-cta">
                    <button className="cta-button">TALK WITH US</button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
