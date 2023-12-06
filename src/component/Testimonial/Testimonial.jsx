import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial = () => {
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exeptional Works</span>
        <span>From me...</span>
        <div className="blur s-blur1" style={{ background: "var(--purple)" }}>
        </div>
        <div className="blur s-blur2" style={{ background: '#c1f5ff' }}>
        </div>
      </div>

      {/* slider */}

      <Swiper>
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>

      

    </div>
  )
}

export default Testimonial