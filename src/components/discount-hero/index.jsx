import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
        <SwiperSlide className='rounded-[50px]'>
          <img src="/public/hero-img1.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[50px]'>
          <img src="/public/hero-img1.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[50px]'>
          <img src="/public/hero-img1.png" alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Discount