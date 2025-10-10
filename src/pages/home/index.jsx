import React from "react";

import Discount from "../../components/discount-hero";
import CategoryHero from "../../components/category-hero";
import categories from "../../data/category";



const HomePage = () => {
  return (
    <>
      <section id="hero" className="bg-[#FAFAFD] mt-[38px] sm:mt-[75px]">
        <div className="container mx-auto px-[15px] lg:px-25">
          <Discount />
        </div>
      </section>
      <section id="category" className="bg-[#FAFAFD]">
        <div className="container mx-auto px-25">
          <div className="categories grid grid-cols-3 gap-[10px]">
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
