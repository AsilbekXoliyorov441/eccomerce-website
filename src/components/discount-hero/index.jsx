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
        <SwiperSlide className='SwiperSlide-css text-[white]'>
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
        <SwiperSlide className='SwiperSlide-css text-[white]'>
          <NavLink to='cart' className='text-left'>
            <h1> Mobil SUPER 3000 X1 <br />  5W-40, 1 л.
              <span className='bg-[#FB6019] ml-[10px] sm:ml-[20px] px-[15px] rounded-2xl'>
                18%
              </span> </h1>
            <p className=''>Акция действует с 1 по 30 июня 2021</p>
            <img className='max-w-[110px] sm:max-w-[200px] xl:max-w-[380px] top-5 sm:top-10 xl:top-15 w-full absolute right-[10px] sm:right-[50px] xl:right-[80px] h-auto' src="/hero-img2.png" alt="img" />
            <img className='rounded-[30px]' src="/hero-bg.png" alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide-css text-[white]'>
          <NavLink to='cart' className='text-left'>
            <h1>Моторные масла <br /> Genesis
              <span className='bg-[#FB6019] ml-[10px] sm:ml-[20px] px-[15px] rounded-2xl'>
                25%
              </span> </h1>
            <p className=''>Акция действует с 1 по 30 июня 2021</p>
            <img className='max-w-[90px] sm:max-w-[160px] lg:max-w-[180px] xl:max-w-[280px] absolute top-[25px] sm:top-[50px] lg:top-[50px] xl:top-25 right-[40px] sm:right-[60px] xl:right-[150px]' src="/hero-img4.png" alt="" />
            <img className='rounded-[30px]' src="/hero-bg.png" alt="img" />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Discount