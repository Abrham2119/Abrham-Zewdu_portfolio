import React from 'react'
import './Intro.css'

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I am Abrham</span>
                <span>Abrham Zewdu</span>
                <span>Frontend Developer with high level of experiance in web designning and development, producting the quality work</span>
            </div>
            <button className="button i-button">
                Hire me
            </button>
            <div className="i-icons">
                <a href="https://github.com/Abrham2119/" target="_blank"><img src={Github} alt="" /></a>
                <a href=""><img src={LinkedIn} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
                
                
            </div>
        </div>
        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
              <div>
                  <FloatingDiv image={crown} tex1='Web' tex2='Developer'/>
             
              </div>
              
        </div>
    </div>
  )
}

export default Intro