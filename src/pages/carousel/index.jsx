import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css"


// import required modules
import { Pagination , Autoplay} from "swiper/modules";
import products from "../../data/cart";
import ProductCard from "../../components/products";


const Caruesel = () => {

  return (
    <section className="pt-[200px]">
      <div className="container mx-auto px-[20px] lg:px-[100px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          
        {
          products.map((el) => (
              <SwiperSlide>
                <ProductCard name={el.name} rating={el.rating} url={el.url} discount={el.discount} price={el.price} article={el.article}   />
              </SwiperSlide>
            )
          )
        }


        </Swiper>
      </div>
    </section>
  );
};

export default Caruesel;
