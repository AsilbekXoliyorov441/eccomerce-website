import React from "react";

const FilterProduct = (...el) => {
  let res = el[0].el;

  return (
    <div className="hover:shadow-xl bg-[white] group duration-300 max-w-[400px] w-full max-h-[400px] border-[1px] rounded-[6px] overflow-hidden p-[10px] sm:p-[20px]  border-[#E3E3E8]">
      <img
        className="mx-auto flex justify-center"
        src="/product-1.png"
        alt=""
      />
      <h2 className=" sm:text-[18px] text-[#1B1D1F] font-bold mt-[20px]">
        {res.name}
      </h2>
      <p className="text-[10px] sm:text-[16px] mt-[5px] text-[#1B1D1F] duration-300 group-hover:text-[#2E1066]">
        {res.description}
      </p>
      <p className="mt-[5px] text-[10px] sm:text-[16px] text-[#7A7680]">
        Артикул: <span className="text-[#2E1066]">{res.id}</span>
      </p>
      <button className="rounded-[4px] text-[10px] sm:text-[16px] w-full py-[10px] sm:py-[15px] text-[#2E1066] font-bold bg-[#5946D71A] mt-[20px] cursor-pointer hover:bg-[#2E1066] hover:text-white duration-300">
        Цены от {res.price} ₱
      </button>
    </div>
  );
};

export default FilterProduct;
