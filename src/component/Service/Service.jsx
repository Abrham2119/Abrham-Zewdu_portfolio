import React from 'react'
import './Service.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'


const Service = () => {
  return (
    <div className="service">

      {/* l-side */}
      <div className="awsome">
        <span>My Awsome</span>
        <span>Service</span>
        <span>Lorem Ipsum is simply dummy text of the <br /> printing and  typesetting industry. </span>
        <button className="button s-button">Download CV</button>
      </div>
      
      
      {/* blur section */}
      <div className="blur s-blur" style={{background: "#ABF!FF94"}}>

      </div>


      {/* r-side */}

      <div className="cards">
        this is the right side
      </div>
    </div>
  )
}

export default Service