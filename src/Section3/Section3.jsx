import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Section3.scss'
import { Autoplay, FreeMode, Mousewheel, Pagination } from 'swiper/modules';
import {slider1, slider2} from '../data.js'

const Section3 = () => {
  const sl_pics_1 = slider1.map(item => <SwiperSlide key={item.index}><img src={item.img} alt="" /></SwiperSlide>)
  const sl_pics_2 = slider2.map(item => <SwiperSlide key={item.index}><img src={item.img} alt="" /></SwiperSlide>)
  
  return (
    <section className='gal_sec'>
      <Swiper
        direction={'horizontal'}
        freeMode={true}
        slidesPerView={3}
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        
        modules={[Mousewheel, Autoplay, FreeMode]}
        className="mySwiper"
      >
        {sl_pics_1}
      </Swiper>
         <Swiper
        direction={'horizontal'}
        freeMode={true}
        slidesPerView={3}
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        
        modules={[Mousewheel, Autoplay, FreeMode]}
        className="mySwiper"
      >
        {sl_pics_2}
      </Swiper>

     
    </section>
  )
}

export default Section3