import { useState, useMemo } from "react";
import filterProducts from "../../data/filter-products";

export default function FilterBrand({ onBrandChange }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const brands = useMemo(() => {
    const unique = [];
    const seen = new Set();
    for (let el of filterProducts) {
      if (!seen.has(el.brand)) {
        seen.add(el.brand);
        unique.push(el.brand);
      }
    }
    return unique;
  }, []);

  const toggleSelect = (brand) => {
    let updated = [];
    if (selected.includes(brand)) {
      updated = selected.filter((b) => b !== brand);
    } else {
      updated = [...selected, brand];
    }
    setSelected(updated);
    onBrandChange(updated); // ✅ Parentga yuborish
  };

  const filteredBrands = brands.filter((b) =>
    b.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-lg border-none w-full mb-4">
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="w-full flex justify-between px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
      >
        <span>Бренд</span>
        <svg
          className={`w-4 h-4 transition-transform ${
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

      {isOpen && (
        <div className="px-4 pb-3 pt-1 border-t border-gray-100">
          <input
            type="text"
            placeholder="Быстрый поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border px-3 py-1.5 text-sm mb-2"
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredBrands
              .slice(0, showAll ? filteredBrands.length : 5)
              .map((brand) => (
                <li key={brand} className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    checked={selected.includes(brand)}
                    onChange={() => toggleSelect(brand)}
                    className="accent-blue-600"
                  />
                  <label className="text-sm">{brand}</label>
                </li>
              ))}
          </ul>
          {filteredBrands.length > 5 && (
            <button
              onClick={() => setShowAll((p) => !p)}
              className="text-xs text-blue-600 mt-2 hover:underline"
            >
              {showAll ? "Скрыть" : "Показать все"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
