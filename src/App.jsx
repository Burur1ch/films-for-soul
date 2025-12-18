import { useState } from "react";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import BestFilms from "./components/BestFilms";
import films from "./data/films";

function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sortedFilms = [...filteredFilms];
  if (sortBy === 'title') {
    sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'year') {
    sortedFilms.sort((a, b) => (a.year || 0) - (b.year || 0));
  }
  return (
    <>
      <MainHeader />
      <SearchBar onSearch={setSearchTerm} onSort={setSortBy} />
      <BestFilms films={sortedFilms} />
    </>
  );
}

export default App;
