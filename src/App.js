import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Component/Navigation";
import MovieList from "./Component/MovieList";
import AddMovie from "./Component/AddMovie";
import { movies } from "./data";
import Searchmovie from "./Component/Searchmovies";
export default function App() {
  const [films, setFilms] = useState(movies);
  const handeladd = (newmovie) => {
    setFilms([...films, newmovie]);
  };
  const [search, setSearch] = useState("");
  const handelserch = (searchedmovie) => {
    setSearch(searchedmovie);
  };
  const [ratin, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div>
      <Navigation />
      <Searchmovie
        searchp={search}
        handelserchp={handelserch}
        searchrate={ratin}
        handelserchrate={handleRating}
      />
      <h1>Movies List</h1>
      <AddMovie handeladd={handeladd} />
      <MovieList
        moviesprops={films.filter(
          (film) =>
            film.title.toLowerCase().includes(search.toLowerCase()) &&
            film.rating >= ratin
        )}
      />
    </div>
  );
}
