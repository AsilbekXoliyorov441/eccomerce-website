import React from "react";
import FilterProduct from "../../components/filter-product";
import FilterSelect from "../../components/filter-select";

const FilterPage = () => {
  return (
    <>
      <section id="filter" className="pt-[160px]">
        <div className="container mx-auto px-[15px] lg:px-25">
          <h1>Колесные диски</h1>
          <div className="filter-part gap-[30px]  flex justify-between">
            <div className="max-w-[300px]  w-full">
              <FilterSelect/>
            </div>
            <div className="w-full grid grid-cols-3 gap-[20px]">
              <FilterProduct /> <FilterProduct /> <FilterProduct />
              <FilterProduct /> <FilterProduct />
              <FilterProduct /> <FilterProduct /> <FilterProduct />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterPage;
