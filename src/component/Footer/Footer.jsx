import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'


const Footer = () => {
  return (
    <div className="footer" >
      <img className='fotter-image' src={wave} alt="" style={{width:'100%'}}/>
      <div className="f-content">
        <span>abrhamzewdu2119@gmail.com</span>
        <div>
          <Instagram color='white' size='3rem'/>
          <GitHub color='white' size='3rem'/>
          <Facebook color='white' size='3rem'/>
        </div>
      </div>
    </div>

  )
}

export default Footer