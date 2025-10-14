import React, { useState } from "react";
import FilterProduct from "../../components/filter-product";
import FilterSelect from "../../components/filter-select";
import FilterSize from "../../components/filter-size";

const FilterPage = () => {
  const [isOpen , setIsOpen] = useState(false);
  return (
    <>
      <section id="filter" className=" pt-[50px] pb-[61px] sm:pb-[0px] sm:pt-[140px]">
        <div className="container mx-auto px-[15px]  lg:px-25">
          <h1 className="text-[24px] text-[#1B1D1F] font-bold mb-[10px] sm:mb-[30px]">
            Колесные диски
          </h1>
          <div className="filter-part gap-[30px] flex-col md:flex-row  flex justify-between">
            <div className="sticky top-[65px] sm:top-[180px] md:static rounded-[4px]  md:max-w-[200px]  lg:max-w-[300px]  w-full">
              <div className="bg-white md:hidden w-full flex justify-center rounded-[4px] p-[5px]">
                <button onClick={() => setIsOpen(!isOpen)} className="border-[#DEDEE2] border-[1px] w-full p-[10px] rounded-[4px]">
                  Фильтры
                </button>
              </div>
              <div className={`absolute flex ${isOpen  ?"" : "hidden"}  sm:flex-col bg-white max-h-[300px] overflow-y-scroll top-[60px] md:sticky md:top-[190px] md:block md:max-w-[200px]  lg:max-w-[300px]  w-full rounded-[6px] p-[20px] border-[#E3E3E8] border-[1px] `}>
                <FilterSelect />
                <FilterSize />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-[5px] sm:gap-[20px]">
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
