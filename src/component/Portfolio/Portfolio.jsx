import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import Slidbar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import 'swiper/css'
import Button from '../common/Button'


const Portfolio = () => {
  const slidebars = [
    {
      link:"",
      img: HOC
    },
    {
      link:"",
      img: MusicApp
    },
    {
      link:"",
      img: Slidbar
    },
    {
      link:"",
      img: Ecommerce
    },
  ]
  return (
    <div className="portfolio" id='Portfolio'>
      {/* heading for section */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        grabCursor={true}
        className='portfolio-slider'
      >
        {
          slidebars.map((slidebar, index) => {
            return (
              <SwiperSlide className='slide' key={index}>
                <div  className="slider-link"><Button link={slidebar.link} backgroundColor='#000a' border="2px solid " text="Click Me"/></div>
                <img src={slidebar.img} alt="" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </div>
  )
}

export default Portfolio