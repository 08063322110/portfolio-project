import React from 'react'
import './testimonials.css'
import IMAGES2P from '../../assets/images2p.png'
import IMAGES4P from '../../assets/images4p.png'
import IMAGES21 from '../../assets/images21.jpg'
import IMAGES16 from '../../assets/images16.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: IMAGES2P,
    name: 'Tina Snow',
    review: 'The traffic to our website has increased thanks to their SEO program, It is an extremely talented web design company..'
  },
  {
    avatar: IMAGES4P,
    name: 'Kemi Adeleke',
    review: 'Our experience with the customer service at the Company has been lovely and great.'
  },
  {
    avatar: IMAGES21,
    name: 'Kwame Despite',
    review: 'Our site is beautiful! It is easy to navigate. The support has been remarkable.'
  },
  {
    avatar: IMAGES16,
    name: 'Nana Michael',
    review: 'It is an extremely talented web design company. We are amazed from where traffic to our site..'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={2}
      pagination ={{ clickable: true}} >
        {
          data.map(({avatar, name, review}, index) => {
            return(
             
                 <SwiperSlide key={index} className='testimonial'>
          <div className= 'client__avatar'>
            <img src={avatar} alt=''/>
          </div>  
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
           
        </SwiperSlide>
              
         
            )
          })
        }
       
      </Swiper>
    </section>
  )
}

export default Testimonials