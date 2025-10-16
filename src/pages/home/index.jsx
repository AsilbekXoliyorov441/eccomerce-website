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
        <div className="container mx-auto flex flex-col gap-[10px] sm:gap-[20px] px-[20px] lg:px-[100px] mt-[-60px] sm:mt-[-35px]">
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
        </div>
      </section>
      <section id="productsAbout">
        <div className="container mx-auto px-[20px] lg:px-[100px] pt-[35px] sm:pt-[60px]">
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
              <p className="text-[#5946D7] text-[14px] font-bold">Все автомасла</p>
              <img src="/Arrow.png" alt="" />
            </Link>
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
        </div>
      </section>
      <section id="products" className="flex sm:hidden">
        <div className="container mx-auto flex flex-col gap-[10px] sm:gap-[20px] px-[20px] lg:px-[100px] mt-[40px] sm:mt-[-35px]">
          <div className="bg-[#90b2e6af] rounded-[10px] p-[10px]">
            <div className=" flex items-start justify-between">
              <h1 className="text-[18px] text-[white]">Новая скидка</h1>
              <div class="flex bg-[#ffffffb8] p-[5px] rounded-2xl items-center gap-8 mb-3">
                <div class="flex items-center gap-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
                  </svg>
                  <span>8:00</span>
                </div>
                <div class="flex items-center gap-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
                  </svg>
                  <span>20:00</span>
                </div>
              </div>
            </div>
            <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
              {products.map((el) => {
                return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container mx-auto px-[20px] flex flex-col gap-[10px] sm:gap-[20px] lg:px-[100px] mt-[20px] sm:mt-[60px]">
          <div className="flex items-center justify-between pb-[20px]">
            <h1 className="text-[20px] sm:text-[24px] font-bold">Рекомендуем</h1>
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
        </div>
      </section>
      <section id="productsAbout">
        <div className="container mx-auto px-[20px] lg:px-[100px] pt-[35px] sm:pt-[60px]">
          <div className="productAbout grid grid-cols-3 gap-[310px] sm:gap-[450px]  xl:gap-[20px] overflow-x-scroll">
            {productAbout.map((el) => {
              return <ProductAbout key={el.name} name={el.name} desc={el.desc} url={el.url} />
            })}
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container mx-auto flex flex-col gap-[10px] sm:gap-[20px] px-[20px] pb-[70px] lg:px-[100px] mt-[20px] sm:mt-[60px]">
          <div className="flex items-center justify-between pb-[20px]">
            <h1 className="text-[20px] sm:text-[24px] font-bold">Часто продаваемые</h1>
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
          <div className="products grid grid-cols-4 gap-[190px] sm:gap-[295px] lg:gap-[330px] xl:gap-[230px] 2xl:gap-[10px] overflow-x-scroll">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
 
        </div>
      </section>
    </>
  );
};

export default HomePage;
