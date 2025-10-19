import React from "react";

import Discount from "../../components/discount-hero";
import CatalogPage from "../catalog";
import CategoryHero from "../../components/category-hero";
import categories from "../../data/category";
import ProductPage from "../../components/products";
import products from "../../data/cart";
import ProductCard from "../../components/products";
import { Link } from "react-router-dom";
import productAbout from "../../data/product-about";
import ProductAbout from "../../components/discount-about";
import CaruselPage from "../carusel";



const HomePage = () => {
  return (
    <>

      <section id="hero" className="bg-[#FAFAFD]  sm:mt-[100px]">
        <div className="container mx-auto px-[15px] lg:px-25">
          <Discount />
        </div>
      </section>
      {/* <section id="category" className="bg-[#FAFAFD]">
        <div className="container mx-auto px-[20px] sm:px-[20px] lg:px-[100px]">
          <div className="categories grid grid-cols-4 gap-[10px] sm:gap-0 sm:grid-cols-2 xl:grid-cols-3 mt-[-60px]">
            {categories.map((el) => {
              return <CategoryHero key={el.name} name={el.name} number={el.number} url={el.url} />;
            })}
          </div>
        </div>
      </section> */}
      <section id="products">
        <div className="container mx-auto px-[20px] lg:px-[100px] mt-[-70px] sm:mt-[-10px]">
          <CaruselPage />
        </div>
      </section>
      <section id="productsAbout">
        <div className="container mx-auto px-[20px] lg:px-[100px] mt-[-40px] sm:mt-[0px]">
          <div className="productAbout grid grid-cols-3 gap-[310px] sm:gap-[450px]  xl:gap-[20px] overflow-x-scroll">
            {productAbout.map((el) => {
              return <ProductAbout key={el.name} name={el.name} desc={el.desc} url={el.url} />
            })}
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container mx-auto flex flex-col gap-[10px] sm:gap-[20px] px-[20px] lg:px-[100px] mt-[30px] sm:mt-[40px]">
          <div className="flex items-center justify-between pb-[20px]">
            <h1 className="text-[20px] sm:text-[24px] font-bold">Автомасла</h1>
            <Link to={`filter/name`} className="flex gap-[7px] items-center rounded-[10px] bg-[#eaeced] p-[5px] sm:p-[10px]">
              <p className="text-[#5946D7] text-[12px] sm:text-[14px] font-bold">Все автомасла</p>
              <img src="/Arrow.png" alt="" />
            </Link>
          </div>
          <div>
            <CaruselPage />
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container mx-auto px-[20px] flex flex-col gap-[10px] sm:gap-[20px] lg:px-[100px] mt-[-30px] sm:mt-[60px]">
          <div className="flex items-center justify-between pb-[20px]">
            <h1 className="text-[20px] sm:text-[24px] font-bold">Рекомендуем</h1>
            <Link to={`filter/name`} className="flex gap-[7px] items-center rounded-[10px] bg-[#eaeced] p-[5px] sm:p-[10px]">
              <p className="text-[#5946D7] text-[12px] sm:text-[14px] font-bold">Все автомасла</p>
              <img src="/Arrow.png" alt="" />
            </Link>
          </div>
          <CaruselPage />
        </div>
      </section>
      <section id="productsAbout">
        <div className="container mx-auto px-[20px] lg:px-[100px] pt-[0px] mt-[-50px] sm:pt-[60px]">
          <div className="productAbout grid grid-cols-3 gap-[310px] sm:gap-[450px]  xl:gap-[20px] overflow-x-scroll">
            {productAbout.map((el) => {
              return <ProductAbout key={el.name} name={el.name} desc={el.desc} url={el.url} />
            })}
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container mx-auto flex flex-col gap-[10px] sm:gap-[20px] px-[20px] lg:px-[100px] mt-[20px] sm:mt-[60px]">
          <div className="flex items-center justify-between pb-[20px]">
            <h1 className="text-[18px] sm:text-[24px] font-bold">Часто продаваемые</h1>
            <Link to={`filter/name`} className="flex gap-[7px] items-center rounded-[10px] bg-[#eaeced] p-[5px] sm:p-[10px]">
              <p className="text-[#5946D7] text-[12px] sm:text-[14px] font-bold">Все автомасла</p>
              <img src="/Arrow.png" alt="" />
            </Link>
          </div>
          <CaruselPage />
        </div>
      </section>
    </>
  );
};

export default HomePage;
