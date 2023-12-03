import React from 'react'
import './Service.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import AbrhamResume from './AbrhamResume.pdf'


const Service = () => {
  return (
    <div className="service">

      {/* l-side */}
      <div className="awsome">
        <span>My Awsome</span>
        <span>Service</span>
        <span>Lorem Ipsum is simply dummy text of the <br /> printing and  typesetting industry. </span>
        <a href={AbrhamResume} download>
        <button className="button s-button">Download CV</button>
        </a>
      </div>
      
      
      {/* blur section */}
      <div className="blur s-blur" style={{background: "var(--purple)"}}>

      </div>

      

      {/* r-side */}

      <div className="cards"  style={{left:'14rem'}}>
         <Card
          emoji={heartemoji}
          heading={'Design'}
          detail={"Figma, Skech ,Photoshop ,Adobe , Adobe xd"}
          />
      </div>
      <div className="cards"  style={{left:'-4rem', top:'12rem' }}>
         <Card
          emoji={glasses}
          heading={'Developer'}
          detail={"Html, CSS ,JavaScript ,React"}
          />
      </div>
      <div className="cards"  style={{left:'12rem', top:'19rem' }}>
         <Card
          emoji={Humble}
          heading={"UX/UI"}
          detail={"Html, CSS ,JavaScript ,React"}
          />
      </div>



    </div>
  )
}

export default Service