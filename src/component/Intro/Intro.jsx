import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import  crown from '../../img/crown.png'
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
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            right
        </div>
    </div>
  )
}

export default Intro