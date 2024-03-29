import React from 'react'
import './Card.css'


const Card = ({ emoji, heading, detail }) => {
  return (
    <div>
      <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span><br/>
        <span>{detail}</span>
        <button className="c-button">
          LEARN MORE
        </button>
      </div>
    </div>
  )
}

export default Card