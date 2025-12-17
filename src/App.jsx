import { useState } from "react";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import BestFilms from "./components/BestFilms";
import films from "./data/films";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <MainHeader />
      <SearchBar />
      <BestFilms films={films} />
    </>
  );
}

export default App;
