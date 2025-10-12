import React, { useState } from "react";

const sizes = [
  {
    id: 1,
    size: 15,
  },
  {
    id: 2,
    size: 13,
  },
  {
    id: 3,
    size: 17,
  },
  {
    id: 4,
    size: 14,
  },
  {
    id: 5,
    size: 23,
  },
  {
    id: 6,
    size: 20,
  },
];

const FilterSize = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center cursor-pointer justify-between px-4 py-3  ${isOpen ? "" : "border-[gray]/20  border-b-[1px]"} outline-none text-sm  font-medium text-gray-800 hover:bg-gray-50`}
      >
        <span>Вылет, мм</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="overflow-hidden pt-[4px]">
        <div className={`${isOpen ? "mt-[-200%] lg:mt-[-110%]" : ""}  px-4 duration-300`}>
          <div className={`flex items-center w-full `}>
            <input
              className="bg-[gray]/6 p-[7px] border-[gray]/30 border-[1px] rounded-[4px] outline-none rounded-tr-[0px] rounded-br-[0px] border-r-0 w-[50%]"
              type="text"
              placeholder="от 0"
            />
            <input
              className="bg-[gray]/6 p-[7px] border-[gray]/30 border-[1px] rounded-[4px] outline-none rounded-tl-[0px] rounded-bl-[0px]  w-[50%]"
              type="text"
              placeholder="до 68"
            />
          </div>
          <ul className="mt-3 max-h-48 overflow-y-auto">
            {sizes.map((el) => {
              return (
                <li className="flex items-center gap-2 px-1.5 py-1 rounded-md hover:bg-gray-50 cursor-pointer">
                  <input
                    className="w-4 h-4 accent-blue-600"
                    id={el.size}
                    type="checkbox"
                  />
                  <label
                    htmlFor={el.size}
                    className="text-sm text-gray-700 w-full cursor-pointer select-none"
                  >
                    {el.size} sm
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSize;
