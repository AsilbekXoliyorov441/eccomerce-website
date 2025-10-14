import { useState, useMemo, useEffect } from "react";
import filterProducts from "./../../data/filter-products";

export default function FilterBrand({ filtered, setFiltered }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  let res = [];
  let brands = [];
  console.log(filtered);
  console.log(selected);
  

  for (let el of filterProducts) {
    if (res.includes(el.brand)) {
    } else {
      brands.push(el);
    }
  }

  useEffect(() => {
    setFiltered(selected.length > 0  ? filterProducts.filter((el) => selected.includes(el.id)) : filterProducts)
  } , [selected])

  const filteredBrands = useMemo(() => {
    const filtered = brands.filter((b) =>
      b.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return showAll ? filtered : filtered.slice(0, 5);
  }, [searchTerm, showAll]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <div className=" rounded-lg border-none w-full">
      {/* Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center cursor-pointer justify-between px-4 py-3 border-none outline-none text-sm  font-medium text-gray-800 hover:bg-gray-50"
      >
        <span>Бренд</span>
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

      {/* Content */}

      <div className="overflow-hidden">
        <div
          className={`px-4 pb-3 ${isOpen ? "mt-[-200%] lg:-mt-[110%]" : ""} duration-300 pt-1 w-full border-t border-gray-100`}
        >
          {/* Search input */}
          <input
            type="text"
            placeholder="Быстрый поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          {/* Brand list */}
          <ul className="mt-3 max-h-48 overflow-y-auto">
            {filteredBrands.map((brand) => (
              <li
                key={brand.id}
                className="flex items-center gap-2 px-1.5 py-1 rounded-md hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(brand.id)}
                  onChange={() => toggleSelect(brand.id)}
                  id={`${brand.name}`}
                  className="w-4 h-4 accent-blue-600"
                />
                <label
                  htmlFor={`${brand.name}`}
                  className="text-sm text-gray-700 w-full cursor-pointer select-none"
                >
                  {brand.brand}{" "}
                  {brand.count && (
                    <span className="text-gray-400 text-xs ml-1">
                      ({brand.count})
                    </span>
                  )}
                </label>
              </li>
            ))}
            {filteredBrands.length === 0 && (
              <p className="text-xs text-gray-400 px-2 py-2">
                Ничего не найдено
              </p>
            )}
          </ul>

          {/* Show all / collapse link */}
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-xs text-blue-600 mt-2 hover:underline"
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </div>
      </div>
    </div>
  );
}
