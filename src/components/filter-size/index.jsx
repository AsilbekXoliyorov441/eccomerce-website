import { useState, useMemo } from "react";
import filterProducts from "../../data/filter-products";

export default function FilterSize({
  onSizeChange,
  selectedSizes,
  onRangeChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState({ min: "", max: "" });

  const sizes = useMemo(() => {
    const unique = Array.from(new Set(filterProducts.map((p) => p.size)));
    return unique.sort((a, b) => a - b);
  }, []);

  const toggleSelect = (size) => {
    let updated = [];
    if (selectedSizes.includes(size)) {
      updated = selectedSizes.filter((s) => s !== size);
    } else {
      updated = [...selectedSizes, size];
    }
    onSizeChange(updated);
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setRange({ ...range, [name]: value });
  };

  const applyRange = () => {
    onRangeChange(range);
  };

  return (
    <div className="rounded-lg border-none w-full">
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="w-full flex justify-between px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
      >
        <span>Размер, мм</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
          {/* Range filter */}
          <div className="flex gap-2 mb-3">
            <input
              type="number"
              name="min"
              value={range.min}
              onChange={handleRangeChange}
              placeholder="от"
              className="w-1/2 border px-2 py-1 text-sm rounded-md"
            />
            <input
              type="number"
              name="max"
              value={range.max}
              onChange={handleRangeChange}
              placeholder="до"
              className="w-1/2 border px-2 py-1 text-sm rounded-md"
            />
            <button
              onClick={applyRange}
              className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md"
            >
              OK
            </button>
          </div>

          {/* Size checkboxes */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {sizes.map((size) => (
              <li key={size} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedSizes.includes(size)}
                  onChange={() => toggleSelect(size)}
                  className="accent-blue-600"
                />
                <label className="text-sm">{size} мм</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
