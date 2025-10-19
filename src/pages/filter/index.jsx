import React, { useState } from "react";
import filterProducts from "../../data/filter-products";
import FilterBrand from "../../components/filter-select";
import FilterSize from "../../components/filter-size";
import FilterProduct from "../../components/filter-product";

const FilterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState(filterProducts);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // 🔹 Brand + Size filtrlashni birlashtiruvchi funksiya
  const applyFilters = (brands = selectedBrands, sizes = selectedSizes) => {
    let filteredList = filterProducts;

    if (brands.length > 0) {
      filteredList = filteredList.filter((item) => brands.includes(item.brand));
    }

    if (sizes.length > 0) {
      filteredList = filteredList.filter((item) => sizes.includes(item.size));
    }

    setFiltered(filteredList);
  };

  // 🔹 Brand bo‘yicha filtrlash
  const handleBrandFilter = (brands) => {
    setSelectedBrands(brands);
    applyFilters(brands, selectedSizes);
  };

  // 🔹 Size bo‘yicha filtrlash
  const handleSizeFilter = (sizes) => {
    setSelectedSizes(sizes);
    applyFilters(selectedBrands, sizes);
  };

  // 🔹 Range uchun (optional)
  const handleRangeChange = (range) => {
    const min = Number(range.min);
    const max = Number(range.max);
    if (!min && !max) {
      applyFilters(selectedBrands, selectedSizes);
      return;
    }
    const filteredByRange = filterProducts.filter((item) => {
      const size = Number(item.size);
      if (min && max) return size >= min && size <= max;
      if (min) return size >= min;
      if (max) return size <= max;
      return true;
    });
    setFiltered(filteredByRange);
  };

  return (
    <section
      id="filter"
      className="pt-[50px] pb-[61px] sm:pb-[0px] sm:pt-[140px]"
    >
      <div className="container mx-auto px-[15px] lg:px-25">
        <h1 className="text-[24px] text-[#1B1D1F] font-bold mb-[10px] sm:mb-[30px]">
          Колесные диски
        </h1>

        <div className="filter-part gap-[30px] flex-col md:flex-row flex justify-between">
          {/* Sidebar */}
          <div className="sticky top-[82px] sm:top-[180px] md:static rounded-[4px] md:max-w-[200px] lg:max-w-[300px] w-full">
            <div className="bg-white md:hidden w-full flex justify-center rounded-[4px] p-[5px]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="border-[#DEDEE2] border-[1px] w-full p-[10px] rounded-[4px]"
              >
                Фильтры
              </button>
            </div>

            <div
              className={`absolute flex ${
                isOpen ? "" : "hidden"
              } sm:flex-col bg-white h-auto overflow-y-scroll md:overflow-y-auto top-[60px] md:sticky md:top-[190px] md:block md:max-w-[200px] lg:max-w-[300px] w-full rounded-[6px] p-[20px] border-[#E3E3E8] border-[1px]`}
            >
              <FilterBrand onBrandChange={handleBrandFilter} />
              <FilterSize
                onSizeChange={handleSizeFilter}
                selectedSizes={selectedSizes}
                onRangeChange={handleRangeChange}
              />
            </div>
          </div>

          {/* Products */}
          <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-[5px] sm:gap-[20px]">
            {filtered.length > 0 ? (
              filtered.map((el, i) => <FilterProduct key={i} el={el} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">
                Hamma mahsulotlar topilmadi 😢
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
