import { useState } from "react";
import heart from "../assets/media/heart-png.webp";

function BestFilms({ films = [] }) {
  const [liked, setLiked] = useState(() => new Set());

  const handleClick = (film) => {
    console.log("Film clicked:", film.title);
  };

  const toggleLike = (index) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="bg-[#201f20] ">
      <div className="w-5xl m-auto">
        <h1 className="text-white pt-3 pl-4 text-3xl font-bold">
          Лучшие фильмы и сериалы мира
        </h1>
        <div className="grid grid-cols-4 gap-4 p-4 ">
          {films.map((film, index) => (
            <div
              className="cursor-pointer relative group"
              onClick={() => handleClick(film)}
              key={index}
            >
              <div
                className={`absolute top-2 right-2 w-8 h-8 flex justify-center items-center transition-opacity ${
                  liked.has(index)
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(index);
                  }}
                  className="focus:outline-none"
                  aria-label={
                    liked.has(index)
                      ? "Убрать из избранного"
                      : "Добавить в избранное"
                  }
                >
                  <img
                    src={heart}
                    alt="heart"
                    className={`w-6 h-6 ${
                      liked.has(index) ? "opacity-100" : "opacity-70"
                    }`}
                  />
                </button>
              </div>

              <img
                className="w-full object-cover"
                src={film.image}
                alt={film.title}
              />

              <h2 className="text-[#3ec1ff] text-lg mt-2">{film.title}</h2>
              <p className="text-[#999] text-sm">{film.director}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestFilms;
