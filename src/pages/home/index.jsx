import React from "react";

import Discount from "../../components/discount-hero";
import CategoryHero from "../../components/category-hero";
import categories from "../../data/category";



const HomePage = () => {
  return (
    <>
      <section id="hero" className="bg-[#FAFAFD] mt-[-40px] sm:mt-[20px]">
        <div className="container mx-auto px-[15px] lg:px-25">
          <Discount />
        </div>
      </section>
      <section id="category" className="bg-[#FAFAFD]">
        <div className="container mx-auto px-[20px] sm:px-[100px]">
          <div className="categories grid grid-cols-2 gap-[10px] sm:gap-0 sm:grid-cols-2 xl:grid-cols-3 mt-[-60px]">
            {categories.map((el) => { 
              return <CategoryHero name={el.name} number={el.number} url={el.url} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
