import { useState, useRef, useEffect } from "react";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export default function FilterSelect() {
  const [selected, setSelected] = useState(people[1]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mx-auto h-screen w-52 pt-20" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative block w-full border-[2px] border-[gray] rounded-lg  py-1.5 pr-8 pl-3 text-left text-sm  focus:outline-none"
      >
        {selected.name}
        <svg
          className={`absolute top-2.5 right-2.5 w-4 h-4 text-gray-500/60  transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown list */}
      {isOpen && (
        <ul className="mt-1 w-full rounded-xl border border-gray/50 bg-white/10 p-1 transition duration-150 ease-in-out backdrop-blur-sm">
          {people.map((person) => (
            <li
              key={person.id}
              onClick={() => {
                setSelected(person);
                setIsOpen(false);
              }}
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-white/10 ${
                selected.id === person.id ? "bg-white/10" : ""
              }`}
            >
              {/* check icon */}
              <svg
                className={`w-4 h-4 transition-opacity ${
                  selected.id === person.id ? "opacity-100" : "opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 5.29a1 1 0 010 1.42l-7.025 7.025a1 1 0 01-1.414 0L3.296 8.765a1 1 0 111.414-1.414l4.55 4.55 6.318-6.318a1 1 0 011.426.707z"
                  clipRule="evenodd"
                />
              </svg>
              {person.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
