import React from "react";

import Discount from "../../components/discount-hero";
import CategoryHero from "../../components/category-hero";
import categories from "../../data/category";



const HomePage = () => {
  return (
    <>
      <section id="hero">
        <Discount />
      </section>
      <section id="category">
        <div className="categories grid grid-cols-3">
          {categories.map((el) => {
            return <CategoryHero  name={el.name} number={el.number} url={el.url} id={el.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default HomePage;
