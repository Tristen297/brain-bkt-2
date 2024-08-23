import React, {useState} from 'react';
import '../../styles/navbar/navbar.css';
import SmallLogo from "../../images-and-icons/brain-bkt-logo-small.png";
import Sidebar from "./sidebar"

function Navbar() {
    const[isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return(
        <>
            <div className="navbar-content">
                <div className="navbar-logo">
                    <a href="./">
                        <img src={SmallLogo} alt="" className="navbar-logo-spec" />
                    </a>
                </div>
                <div className="navbar-links">
                    <a href="./">Home</a>
                    <a href="./">Services</a>
                    <a href="./">About Us</a>
                    <a href="./">Our Work</a>
                    <a href="./">Contact Us</a>
                </div>
                <div className="navbar-right-icon" onClick={toggleSidebar}>
                    &#9776;
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    )
}

export default Navbar