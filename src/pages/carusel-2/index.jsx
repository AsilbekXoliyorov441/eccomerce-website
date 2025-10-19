import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import "./style.css"

import { Pagination } from 'swiper/modules';
import ProductAbout from '../../components/discount-about'; 
import productAbout from '../../data/product-about';
const Carusel2Page = () => {
    return (
        <>
            <section className=''>
                <div className="container mx-auto sm:px-[0px] pb-[80px]">
                    <Swiper
                        slidesPerView={1.7}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            clickable: false,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1.8,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2.5,
                                spaceBetween: 15,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                        }}
                        modules={[]}
                        className="mySwiper"
                    >
                        {
                            productAbout.map((el) => {
                                return (
                                    <SwiperSlide>
                                        <ProductAbout name={el.name} desc={el.desc} url={el.url} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Carusel2Page