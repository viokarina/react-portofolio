import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Vio</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>Experience</li>
                        <li>Portofolio</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact Me
                </button>
            </div>
        </div>
    )
}

export default Navbar