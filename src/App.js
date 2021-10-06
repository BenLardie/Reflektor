import React, { useState, createContext } from "react";
import "./style.css";
import movies from "./data/movies.json";
import movieGenres from "./data/movie-genres.json";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import FilterModule from "./components/FilterModule/FilterModule";

export const MovieContext = createContext();

export default function App() {
  const [movieList, setMovieList] = useState(movies);
  const [moduleOpen, setModuleOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const openFilters = () => {
    setModuleOpen(true);
  };

  const filterBYGenre = movies.filter((el) => {
    if (el.genre_ids) {
      return selectedGenres.some((f) => {
        return el.genre_ids.some((id) => {
          return id === f.id;
        });
      });
    }
  });

  const handleClick = () => {
    setMovieList(movies);
    if (selectedGenres.length > 0) {
      setMovieList(filterBYGenre);
    }
    setModuleOpen("");
  };

  const clearFilter = () => {
    setMovieList(movies);
    setSelectedGenres([]);
  };

  return (
    <MovieContext.Provider value={{ selectedGenres, setSelectedGenres }}>
      <div className="App">
        <div className="filterBar">
          <button className="filterButton" onClick={openFilters}>
            FILTERS
          </button>
          <div className="clearFilter" onClick={clearFilter}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.44727 6.5L12.8037 1.14354C13.0654 0.881853 13.0654 0.457945 12.8037 0.196262C12.5421 -0.0654207 12.1181 -0.0654207 11.8565 0.196262L6.5 5.55273L1.14354 0.196262C0.881853 -0.0654207 0.457944 -0.0654207 0.196262 0.196262C-0.0654206 0.457945 -0.0654206 0.881853 0.196262 1.14354L5.55273 6.5L0.196262 11.8565C-0.0654206 12.1182 -0.0654206 12.5421 0.196262 12.8037C0.327101 12.9346 0.498942 13 0.669898 13C0.840855 13 1.01271 12.9346 1.14354 12.8037L6.5 7.44728L11.8565 12.8037C11.9873 12.9346 12.1591 13 12.3301 13C12.5011 13 12.6729 12.9346 12.8037 12.8037C13.0654 12.5421 13.0654 12.1182 12.8037 11.8565L7.44727 6.5Z"
                fill="white"
              />
            </svg>
            <p>CLEAR ALL</p>
          </div>
          <ul>
            {selectedGenres &&
              selectedGenres.map((genre) => (
                <li className="selectedGenre">{genre.name}</li>
              ))}
          </ul>
        </div>
        {moduleOpen && (
          <FilterModule movieGenres={movieGenres} handleClick={handleClick} />
        )}
        <div className="movies">
          {movieList &&
            movieList.map((movie) => (
              <MovieInfo movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </MovieContext.Provider>
  );
}
