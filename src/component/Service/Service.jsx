import React from 'react'
import './Service.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import AbrhamResume from './AbrhamResume.pdf'




const Service = () => {
  return (
    <div className="service" id='Service'>

      {/* l-side */}
      <div className="awsome">
        <span>My Awsome</span>
        <span>Service</span>
        <span>"Expert in React framework for dynamic HTML and CSS manipulation. <br /> Efficiently add and remove elements with seamless transitions."</span>
        <a href={AbrhamResume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>




      {/* r-side */}

      <div className="cards" style={{ left: '14rem' }}>
        <Card
          emoji={heartemoji}
          heading={'Design'}
          detail={"Figma,Adobe Photoshop ,Adobe Illustrator"}
        />
      </div>
      <div className="cards" style={{ left: '-4rem', top: '12rem' }}>
        <Card
          emoji={glasses}
          heading={'Developer'}
          detail={"Html, CSS ,JavaScript ,React"}
        />
      </div>
      <div className="cards" style={{ left: '12rem', top: '19rem' }}>
        <Card
          emoji={Humble}
          heading={"UX/UI"}
          detail={"Html, CSS ,JavaScript ,React"}
        />
      </div>

      {/* service blur section  */}

      <div className="blur s-blur1" style={{ background: "var(--purple)" }}>

      </div>
      <div className="blur s-blur2" style={{ background: '#c1f5ff' }}>

      </div>

    </div>
  )
}

export default Service