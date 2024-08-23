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
                    <h1>Frisk</h1>
                    <p>We are a digital agency that helps businesses develop immersive and engaging experiences.</p>
                    <hr />
                </div>
                <div className="sidebar-contact">
                    <p>27 Division St, New York,</p>
                    <p>NY 10002, USA</p>
                    <p>+1 800 123 654 987</p>
                    <p>frisk.agency@mail.com</p>
                </div>
                <div className="sidebar-cta">
                    <button className="cta-button">LET'S TALK WITH US</button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
