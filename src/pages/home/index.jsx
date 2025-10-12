import React from "react";

import Discount from "../../components/discount-hero";
import CategoryHero from "../../components/category-hero";
import categories from "../../data/category";
import ProductPage from "../../components/products";
import products from "../../data/cart";



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
              return <CategoryHero name={el.name} number={el.number} url={el.url} />;
            })}
          </div>
        </div>
      </section>
      <section id="products">
        <div className="contaienr mx-auto px-[100px]">
          <div className="products">
            {products.map((el) => {
              return <ProductPage name={el.name} price={el.price} url={el.url} discount={el.discount} rating={el.rating} article={el.article} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
