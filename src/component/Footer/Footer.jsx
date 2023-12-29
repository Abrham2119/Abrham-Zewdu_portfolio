import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Linkdine from '@iconscout/react-unicons/icons/uil-linkedin'
import Gmail from '@iconscout/react-unicons/icons/uil-envelope'


const Footer = () => {
  return (
    <div className="footer" >
      <img className='fotter-image' src={wave} alt="" style={{width:'100%'}}/>
      <div className="f-content">
        <span>abrhamzewdu2119@gmail.com</span>
        <div>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=abrhamzewdu2119@gmail.com" target="_blank"><Gmail color='white' size='3rem' className='f-icons' /></a>
          <a href="https://www.linkedin.com/in/abrham-zewdu-13a760232/" target="_blank"><Linkdine color='white' size='3rem' className='f-icons' />
          </a>
          <a href="https://github.com/Abrham2119" ><GitHub color='white' size='3rem' className='f-icons' />
          </a>

        </div>
      </div>
    </div>

  )
}

export default Footer