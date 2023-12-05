import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import Slidbar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading for section */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper>
        <SwiperSlide>
          <img src={Slidbar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Portfolio