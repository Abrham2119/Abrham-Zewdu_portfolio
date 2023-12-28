import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'



const Works = () => {
  return (
    <div className="works">
      <div className="awsome">
        <span>Works of all goal</span>
        <span>Brands & Clients</span>
        <span>Lorem Ipsum is simply dummy text of the
          <br /> printing and  typesetting industry. <br />
          Lorem Ipsum is simply dummy text of the   <br />
          printing and  typesetting industry.
        </span>


        <button className="button s-button">Hire me</button>
        <div className="blur s-blur2" style={{ background: '#c1f5ff' }}>

        </div>
      </div>


      {/* right side works */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" srcset="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiver} alt="" srcset="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" srcset="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" srcset="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" srcset="" />
          </div>
          {/* background Circle */}

          <div>
            <div className="backCircle blueCircle"></div>
            <div className="backCircle yellowCircle"></div>

          </div>


        </div>
      </div>

    </div>
  )
}

export default Works