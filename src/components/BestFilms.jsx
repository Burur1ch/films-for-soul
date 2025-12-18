import { use, useCallback, useEffect, useState } from "react";
import heart from "../assets/media/heart-png.webp";

function BestFilms({ films = [] }) {
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem("likedFilms");
    return new Set(saved ? JSON.parse(saved) : []);
  });
  const [amountFilms, setAmountFilms] = useState(8);

  const handleClick = useCallback((film) => {
    console.log("Film clicked:", film.title);
  }, []);

  const toggleLike = (filmId) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(filmId)) next.delete(filmId);
      else next.add(filmId);
      return next;
    });
  };

  useEffect(() => {
    localStorage.setItem("likedFilms", JSON.stringify(Array.from(liked)));
  }, [liked]);
  return (
    <div className="bg-[#201f20] pb-5">
      <div className="max-w-7xl m-auto">
        <h1 className="text-white pt-3 pl-4 text-2xl md:text-3xl font-bold">
          Лучшие фильмы и сериалы мира
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ">
          {films.slice(0, amountFilms).map((film, index) => (
            <div
              className="cursor-pointer relative group"
              onClick={() => handleClick(film)}
              key={film.id || index}
            >
              <div
                className={`absolute top-2 right-2 w-8 h-8 flex justify-center items-center transition-opacity ${
                  liked.has(film.id || index)
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(film.id || index);
                  }}
                  className="focus:outline-none"
                  aria-label={
                    liked.has(film.id || index)
                      ? "Убрать из избранного"
                      : "Добавить в избранное"
                  }
                >
                  <img
                    src={heart}
                    alt="heart"
                    className={`w-6 h-6 ${
                      liked.has(film.id || index) ? "opacity-100" : "opacity-70"
                    }`}
                  />
                </button>
              </div>

              <img
                className="w-full object-cover"
                src={film.image}
                alt={film.title}
              />

              <h2 className="text-[#3ec1ff] text-base md:text-lg mt-2 line-clamp-2">
                {film.title}
              </h2>
              <p className="text-[#999] text-xs md:text-sm line-clamp-1">
                {film.director}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full px-4">
          <button
            onClick={() => setAmountFilms((prev) => prev + 8)}
            className="w-50 h-12 bg-[#c00] text-white font-semibold cursor-pointer hover:bg-[#a00] transition"
          >
            Показать еще
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestFilms;
