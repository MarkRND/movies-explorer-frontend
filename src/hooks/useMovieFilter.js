import { useEffect, useState } from "react";

const useMovieFilter = (movies, searchHistory, shortFilmFilter) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

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
  }, [movies, searchHistory, shortFilmFilter]);

  return filteredMovies;
};

export default useMovieFilter;
