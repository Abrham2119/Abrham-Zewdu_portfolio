// rafce
import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                Abrham
            </div>
             <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experiance</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar