import React, { useState, useEffect, useCallback } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import "./SavedMovies.css";


const SavedMovies = ({ movies, onAddMovie, serverError, onDeleteMovie }) => {
  const [shortFilmFilter, setShortFilmFilter] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const filterMovies = useCallback((searchQuery) => {
    setLoading(true);
    setNotFound(false);
    let updatedFilteredMovies = movies;
    if (searchQuery) {
      const lastSearchQuery = searchQuery;
      updatedFilteredMovies = movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(lastSearchQuery.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(lastSearchQuery.toLowerCase())
        );
      });
    }

    if (shortFilmFilter) {
      updatedFilteredMovies = updatedFilteredMovies.filter(
        (movie) => movie.duration <= 40
      );
    }

    if (updatedFilteredMovies.length === 0) {
      setNotFound(true);
    }
    setFilteredMovies(updatedFilteredMovies);
    setLoading(false);
  }, [movies, shortFilmFilter]);

  useEffect(() => {
    filterMovies();
  }, [movies, shortFilmFilter, filterMovies]);

  const handleFilterMovies = (value) => {
    filterMovies(value);
  };

  const handleShortFilmFilterChange = () => {
    setShortFilmFilter(!shortFilmFilter);
  };

  return (
    <main className="movies">
      <SearchForm
        onFilterMovies={handleFilterMovies}
        onSwitch={shortFilmFilter}
        onCheckbox={handleShortFilmFilterChange}
      />
      {serverError ? (
        <span className="movies__error">{serverError}</span>
      ) : loading ? (
        <Preloader />
      ) : notFound ? (
        <span className="movies__error">Ничего не найдено.</span>
      ) : (
        <MoviesCardList
          movies={filteredMovies}
          onAddMovie={onAddMovie}
          onDeleteMovie={onDeleteMovie}
          isSavedPage={true}
          moviesSave={filteredMovies}
          showAllCards={true}
          shortFilmFilter={shortFilmFilter}
        />
      )}
    </main>
  );
};

export default SavedMovies;
