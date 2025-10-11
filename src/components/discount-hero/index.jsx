import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from 'react-router-dom';
const Discount = () => {
  return (
    <div className="py-[100px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, // 3 sekund
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='SwiperSlide-css'>
          <NavLink to='cart' className='text-left'>
            <h1>Оригинальные автомасла <br />
              cо скидкой
              <span className='bg-[#FB6019] ml-[10px] sm:ml-[20px] px-[15px] rounded-2xl'>
                15%
              </span> </h1>
            <p className=''>Акция действует с 1 по 30 июня 2021</p>
            <img src="/hero-img.png" alt="img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide-css'>
          <NavLink to='cart' className='text-left'>
            <h1>Оригинальные автомасла <br />
              cо скидкой
              <span className='bg-[#FB6019] ml-[10px] sm:ml-[20px] px-[15px] rounded-2xl'>
                15%
              </span> </h1>
            <p className=''>Акция действует с 1 по 30 июня 2021</p>
            <img src="/hero-img.png" alt="img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide-css'>
          <NavLink to='cart' className='text-left'>
            <h1>Оригинальные автомасла <br />
              cо скидкой
              <span className='bg-[#FB6019] ml-[10px] sm:ml-[20px] px-[15px] rounded-2xl'>
                15%
              </span> </h1>
            <p className=''>Акция действует с 1 по 30 июня 2021</p>
            <img src="/hero-img.png" alt="img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide-css'>
          <NavLink to='cart' className='text-left'>
            <h1>Оригинальные автомасла <br />
              cо скидкой
              <span className='bg-[#FB6019] ml-[10px] sm:ml-[20px] px-[15px] rounded-2xl'>
                15%
              </span> </h1>
            <p className=''>Акция действует с 1 по 30 июня 2021</p>
            <img src="/hero-img.png" alt="img" />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Discount