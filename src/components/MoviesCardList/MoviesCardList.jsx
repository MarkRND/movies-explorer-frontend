import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import useVisibleCards from "../../hooks/useVisibleCards";

const MoviesCardList = ({
  onAddMovie,
  onDeleteMovie,
  isSavedPage,
  movies,
  saveMovies,
  showAllCards,
}) => {
  const { calculateVisibleCards, handleCardClick } = useVisibleCards();
  const [visibleCardsIndex, setVisibleCardsIndex] = useState(0);

  useEffect(() => {
    if (showAllCards && isSavedPage) {
      setVisibleCardsIndex(movies.length);
    }
  }, [showAllCards, isSavedPage, movies.length]);

  const handleLoadMoreClick = () => {
    setVisibleCardsIndex((prevIndex) => prevIndex + handleCardClick());
  };

  const shouldShowLoadMoreButton =
    !showAllCards &&
    !isSavedPage &&
    visibleCardsIndex + calculateVisibleCards() < movies.length;

  return (
    <section className="movies-card">
      <>
        <ul className="movies-card__block">
          {movies
            .slice(
              0,
              visibleCardsIndex + (showAllCards ? 0 : calculateVisibleCards())
            )
            .map((card) => (
              <MoviesCard
                key={card.id || card._id}
                card={card}
                onDeleteMovie={onDeleteMovie}
                onAddMovie={onAddMovie}
                isSaved={isSavedPage}
                saveMovies={saveMovies}
              />
            ))}
        </ul>
        {shouldShowLoadMoreButton && (
          <div className="movies-card__сontainer">
            <button
              className="movies-card__button"
              onClick={handleLoadMoreClick}
            >
              Ещё
            </button>
          </div>
        )}
      </>
    </section>
  );
};

export default MoviesCardList;
