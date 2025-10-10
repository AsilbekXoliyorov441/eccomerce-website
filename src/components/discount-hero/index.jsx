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
        <SwiperSlide className="py-[120px] bg-gray-100">Slide 1</SwiperSlide>
        <SwiperSlide className="py-[120px] bg-gray-200">Slide 2</SwiperSlide>
        <SwiperSlide className="py-[120px] bg-gray-300">Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Discount