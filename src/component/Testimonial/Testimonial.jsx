import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from"../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
// import {Pagination} from 'swiper'
// import 'swiper/css/pagination'
// import 'swiper/css'


const Testimonial = () => {
  const clients=[
    {img:profilePic1,
    review:"The picturesque town of Greenfield is nestled in a lush valley, surrounded by rolling hills and majestic mountains. Its charming streets are lined with quaint cottages, adorned with colorful flower boxes that add a touch of vibrancy to the scene. "
    },
    {img:profilePic2,
      review:"The picturesque town of Greenfield is nestled in a lush valley, surrounded by rolling hills and majestic mountains. Its charming streets are lined with quaint cottages, adorned with colorful flower boxes that add a touch of vibrancy to the scene. "
      },
      {img:profilePic3,
        review:"The picturesque town of Greenfield is nestled in a lush valley, surrounded by rolling hills and majestic mountains. Its charming streets are lined with quaint cottages, adorned with colorful flower boxes that add a touch of vibrancy to the scene. "
        },
  ]


  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exeptional Works</span>
        <span>From me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}>
        </div>
        <div className="blur t-blur2" style={{ background: '#c1f5ff' }}>
        </div>
      </div>

      {/* slider */}


      <Swiper
      // modules={[Pagination]}
      // slidesPerView={1}
      // pagination={{clickable: true}}
      >
        {clients.map((client,index)=>{
          return(
              <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
              </SwiperSlide>
          )
        }

        )}
      
      </Swiper>

      

    </div>
  )
}

export default Testimonial