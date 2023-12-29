import React from 'react'
import './Intro.css'

import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.jpg'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Envelope from '@iconscout/react-unicons/icons/uil-envelope'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'





const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hello! I am Abrham</span>
                    <span>Abrham Zewdu</span>
                    <span>Frontend Developer with high level of experiance in web designning and development, producting the quality work</span>
                </div>
                <button className="button i-button">
                    Hire me
                </button>
                <div className="i-icons">
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=abrhamzewdu2119@gmail.com" target="_blank"><Envelope color='orange' size='7rem'  className='intro-icon'/></a>
                    <a href="https://www.linkedin.com/in/abrham-zewdu-13a770232/" target="_blank"><Linkedin color='orange' size='7rem' className='intro-icon' /></a>
                    <a href="https://github.com/Abrham2119" target="_blank" ><GitHub color='orange' size='7rem' className='intro-icon'/></a>


                </div>
            </div>
            <div className="i-right">
                {/* <img src={vector1} alt="" />
                <img src={vector2} alt="" /> */}
                <img src={boy} alt=""  className='boyImage'/>

                <div style={{ top: '-4%', left: '77%' }}>
                    <FloatingDiv image={crown} text1='Web' text2='Developer' />
                </div>
                <div style={{ top: '17rem', left: 'orem' }}>
                    <FloatingDiv image={thumbup} text1='Bast Design' text2='Award' />
                </div>


                
                {/* blur effact */}
                <div className="blur" style={{ borderColor: "rgb(237 210 255)" }}>

                </div>

                <div className="blur" style={{
                    background:'#c1f5ff',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}>

                </div>
            </div>
        </div>
    )
}

export default Intro