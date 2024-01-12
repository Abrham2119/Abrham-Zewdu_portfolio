// rafce
import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import Service from '../Service/Service'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'

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
                     
                      
                          to='Navbar'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                      ><li className="link-class">Home</li>
                  
                      </Link>
                      <Link
                          to='Service'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                         
                      ><li className="link-class">Service</li>
                  
                      </Link>
                      <Link
                          to='Experience'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                      ><li className="link-class">Experiance</li>
                  
                      </Link>
                      <Link
                          to='Portfolio'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                      >    <li className="link-class">Portfolio</li>
                  
                      </Link>
                      {/* <Link
                          to='Testimonial'
                          activeclass='activeclass'
                          smooth={true}
                          duration={500}
                          offset={-100}
                      >    <li className="link-class">Testimonial</li>
                  
                      </Link> */}

                    
                    
                    
                    
                
                    
                </ul>
            </div>

            <a href="#Contact"><button className="button n-button">
                Contact
            </button></a>
            

        </div>
    </div>
  )
}

export default Navbar