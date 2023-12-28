// rafce
import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import Service from '../Service/Service'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'
import Testimonial from '../Testimonial/Testimonial'

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
        <div className="n-left">
            <div className="n-name">
                Abrham
            </div>
             <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>


                      <Link
                      spy={true}
                          to='Navbar'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                      ><li>Home</li>
                  
                      </Link>
                      <Link
                          to='Service'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                         
                      ><li>Service</li>
                  
                      </Link>
                      <Link
                          to='Experience'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                      ><li>Experiance</li>
                  
                      </Link>
                      <Link
                          to='Portfolio'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                      >    <li>Portfolio</li>
                  
                      </Link>
                      <Link
                          to='Testimonial'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                      ><li>Testimonial</li>
                  
                      </Link>

                    
                    
                    
                    
                
                    
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