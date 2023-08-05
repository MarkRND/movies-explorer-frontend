import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import React, { useEffect, useState } from "react";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

const MoviesCard = ({ card, onDeleteMovie, onAddMovie, saveMovies }) => {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      setIsSaved(saveMovies.some((movie) => movie.movieId === card.id));
    }
  }, [location.pathname, card.id, saveMovies]);

  const handleDeleteCard = () => {
    if (location.pathname === "/movies") {
      const movieId = saveMovies.find((movie) => movie.movieId === card.id);
      onDeleteMovie(movieId._id);
    }
    if (location.pathname === "/saved-movies") {
      onDeleteMovie(card._id);
      setIsSaved(false);
    }
  };

  const handleSave = () => {
    onAddMovie(card);
    setIsSaved(true);
  };

  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const Minutes = minutes % 60;
    return `${hours}ч ${Minutes}м`;
  };

  return (
    <li className="card">
      <a
        className="movies-card__trailer"
        href={card.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={
            location.pathname === "/movies"
              ? `https://api.nomoreparties.co${card.image.url}`
              : card.image
          }
          alt={card.nameRU}
          className="card__image"
        />
      </a>
      {location.pathname === "/movies" && (
        <button
          className={`card__button ${isSaved ? "card__button_active" : ""}`}
          type="button"
          aria-label="Сохранить"
          onClick={isSaved ? handleDeleteCard : handleSave}
        >
          {isSaved ? "" : "Сохранить"}
        </button>
      )}
      {location.pathname === "/saved-movies" && (
        <button
          className="card__button card__button_delete"
          type="button"
          aria-label="Удалить"
          onClick={handleDeleteCard}
        ></button>
      )}

      <div className="card__container">
        <h2 className="card__title">{card.nameRU}</h2>
        <div className="card__block">
          <span className="card__time">
            {convertMinutesToHours(card.duration)}
          </span>
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
