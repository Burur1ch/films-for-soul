import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Search for:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    <>
      <div className="bg-[#111] w-full h-16">
        <div className="flex justify-between px-4 w-5xl mx-auto h-full items-center">
          <p className="text-white">Будь в курсе новинок</p>
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              placeholder="Восьмая миля"
              className="border h-9 bg-[#282828] border-[#333] text-white px-2 py-1 text-white placeholder-white focus:outline-none"
            />
            <button className="bg-[#c00] h-9 text-white px-3 py-1">
              Найти
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
