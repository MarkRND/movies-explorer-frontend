import React, { useState, useEffect } from "react";
import api from "../../utils/MoviesApi.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
import {
  CONNECTION_PROBLEM,
} from "../constants/constants";

const Movies = ({ onAddMovie, onDeleteMovie, saveMovies }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );
  const [shortFilmFilter, setShortFilmFilter] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (storedMovies) {
      setMovies(storedMovies);
      setLoading(false);
    } else {
      fetchMovies();
    }
  }, []);

  useEffect(() => {
    if (searchHistory.length > 0) {
      const lastSearchQuery = searchHistory[0];
      let filteredMovies = movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(lastSearchQuery.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(lastSearchQuery.toLowerCase())
        );
      });
      if (shortFilmFilter) {
        filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
      }
      setFilteredMovies(filteredMovies);
    }
  }, [searchHistory, movies, shortFilmFilter]);

  const fetchMovies = () => {
    api
      .getMovies()
      .then((cards) => {
        setMovies(cards);
        setLoading(false);
        localStorage.setItem("movies", JSON.stringify(cards));
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  const handleFilterMovies = (value) => {
    let filteredMovies = movies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(value.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(value.toLowerCase())
      );
    });

    if (shortFilmFilter) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    setFilteredMovies(filteredMovies);
    setSearchHistory((prevSearchHistory) => [value, ...prevSearchHistory]);
  };

  const handleShortFilmFilterChange = () => {
    const updatedShortFilmFilter = !shortFilmFilter;
    setShortFilmFilter(updatedShortFilmFilter);
    localStorage.setItem(
      "shortFilmFilter",
      JSON.stringify(updatedShortFilmFilter)
    );
  };

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    const savedShortFilmFilter = JSON.parse(
      localStorage.getItem("shortFilmFilter")
    );
    if (savedShortFilmFilter !== null) {
      setShortFilmFilter(savedShortFilmFilter);
    }
  }, []);

  return (
    <main className="movies">
      <SearchForm
        onFilterMovies={handleFilterMovies}
        onSwitch={shortFilmFilter}
        onCheckbox={handleShortFilmFilterChange}
      />

      {loading ? (
        <Preloader />
      ) : error ? (
        <span className="movies__error">{CONNECTION_PROBLEM}</span>
      ) : filteredMovies.length === 0 && searchHistory.length > 0 ? (
        <span className="movies__error">Ничего не найдено.</span>
      ) : (
        filteredMovies.length > 0 && (
          <MoviesCardList
            movies={filteredMovies}
            onAddMovie={onAddMovie}
            onDeleteMovie={onDeleteMovie}
            saveMovies={saveMovies}
          />
        )
      )}
    </main>
  );
};

export default Movies;
