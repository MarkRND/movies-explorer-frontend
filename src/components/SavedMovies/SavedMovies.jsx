import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import "./SavedMovies.css";

const SavedMovies = () => {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
};

export default SavedMovies;
