import React from 'react'

const FilterProduct = () => {
  return (
    <div className="hover:shadow-xl group duration-300 max-w-[400px] w-full border-[1px] rounded-[6px] overflow-hidden p-[20px]  border-[#E3E3E8]">
      <img
        className="mx-auto flex justify-center"
        src="/public/product-1.png"
        alt=""
      />
      <h2 className="text-[18px] text-[#1B1D1F] font-bold mt-[20px]">
        Ls Replica
      </h2>
      <p className="mt-[5px] text-[#1B1D1F] duration-300 group-hover:text-[#2E1066]">
        Диск колёсный литой "TY87 7x16, 6x139,7, ET30, D106.1, серебристый (S)"
      </p>
      <p className="mt-[5px] text-[#7A7680]">
        Артикул: <span className="text-[#2E1066]">0092S40240</span>
      </p>
      <button className="rounded-[4px] w-full py-[15px] text-[#2E1066] font-bold bg-[#5946D71A] mt-[20px] cursor-pointer hover:bg-[#2E1066] hover:text-white duration-300">
        Цены от 12 739 ₽
      </button>
    </div>
  );
}

export default FilterProduct