import React from "react";

import Discount from "../../components/discount-hero";
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
      <section id="hero" className="bg-[#FAFAFD] mt-[-40px] sm:mt-[20px]">
        <div className="container mx-auto px-[15px] lg:px-25">
          <Discount />
        </div>
      </section>
      <section id="category" className="bg-[#FAFAFD]">
        <div className="container mx-auto px-[20px] sm:px-[20px] lg:px-[100px]">
          <div className="categories grid grid-cols-2 gap-[10px] sm:gap-0 sm:grid-cols-2 xl:grid-cols-3 mt-[-60px]">
            {categories.map((el) => {
              return <CategoryHero key={el.name} name={el.name} number={el.number} url={el.url} />;
            })}
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container mx-auto px-[100px] mt-[80px]">
          <div className="flex items-center justify-between pb-[20px]">
            <h1 className="text-[24px] font-bold">Автомасла</h1>
            <Link to={`filter/name`} className="flex gap-[7px] items-center rounded-[10px] bg-[#eaeced] p-[10px]">
              <p className="text-[#5946D7] text-[14px] font-bold">Все автомасла</p>
              <img src="/Arrow.png" alt="" />
            </Link>
          </div>
          <div className="products grid grid-cols-4 gap-[20px]">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
        </div>
      </section>
      <section id="productsAbout">
        <div className="container mx-auto px-[100px] pt-[60px]">
          <div className="productAbout grid grid-cols-3 gap-[20px]">
            {productAbout.map((el) => {
              return <ProductAbout key={el.name} name={el.name} desc={el.desc} url={el.url} />
            })}
          </div>
        </div>
      </section>
      <section id="products" className="pt-[60px]">
        <div className="container mx-auto px-[100px]">
          <div>
            <h1 className="text-[24px] font-bold pb-[30px]">Рекомендуем</h1>
          </div>
          <div className="products grid grid-cols-4">
            {products.map((el) => {
              return <ProductCard name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
        </div>
      </section>
      <section id="products" className="pt-[60px]">
        <div className="container mx-auto px-[100px]">
          <div>
            <h1 className="text-[24px] font-bold pb-[30px]">Часто продаваемые</h1>
          </div>
          <div className="products grid grid-cols-4">
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
