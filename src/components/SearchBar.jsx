import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
function SearchBar({ onSearch, onSort }) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);
  return (
    <div className="bg-[#111] w-full h-auto md:h-16">
      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 px-4 max-w-7xl mx-auto h-full py-3 md:py-0 items-start md:items-center">
        <p className="text-white text-sm md:text-base">Будь в курсе новинок</p>
        <div className="flex gap-2 w-full md:w-auto items-center">
          <select
            onChange={(e) => onSort?.(e.target.value)}
            defaultValue=""
            className="bg-[#c00] text-white px-2 py-1 text-sm whitespace-nowrap hover:bg-[#a00] transition"
          >
            <option value="">Сортировка по</option>
            <option value="title">Алфавиту</option>
            <option value="year">Году</option>
          </select>
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              placeholder="Восьмая миля"
              className="flex-1 md:flex-none border h-9 bg-[#282828] border-[#333] text-white px-2 py-1 placeholder-white focus:outline-none text-sm"
            />
            <button
              className="bg-[#c00] h-9 text-white px-3 py-1 text-sm whitespace-nowrap hover:bg-[#a00] transition"
              onClick={() => onSearch("")}
            >
              Убрать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
