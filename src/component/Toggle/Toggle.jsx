import React, { useState } from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { useContext } from 'react'
import { darkModeContext } from '../../App'

const Toggle = () => {
  const {changeMode} = useContext(darkModeContext)
  const [toggleBtnPosition, setToggleBtnPosition] = useState(true)
  console.log(changeMode);
  return (
    <div onClick={()=>{
      setToggleBtnPosition(!toggleBtnPosition)
      changeMode(toggleBtnPosition)
      localStorage.setItem('mode', toggleBtnPosition);
      }} className="toggle" >
        
      <Moon />
      <Sun />
     
        <div   style={{left:`${!toggleBtnPosition ?'50%' :'0%'}`}} className="t-button"></div>
    </div>
  )
}

export default Toggle