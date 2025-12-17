import { useState } from "react";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import BestFilms from "./components/BestFilms";
import films from "./data/films";

function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFilms = films.filter(film => film.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <>
      <MainHeader />
      <SearchBar onSearch={setSearchTerm} />
      <BestFilms films={filteredFilms} />
    </>
  );
}

export default App;
