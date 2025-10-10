import React from "react";

import Discount from "../../components/discount-hero";
import CategoryHero from "../../components/category-hero";
import categories from "../../data/category";



const HomePage = () => {
  return (
    <>
      <section id="hero">
        {/* <Discount /> */}
      </section>
      <section id="category" className="">
        <div className="container mx-auto px-[20]">
          {/* <div className="categories grid grid-cols-3">
            {categories.map((el) => {
              return <CategoryHero name={el.name} number={el.number} url={el.url} />;
            })}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HomePage;
