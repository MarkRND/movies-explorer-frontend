import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import React, { useEffect, useState } from "react";

const MoviesCard = ({ card, onDeleteClick }) => {
  const [isSaved, setIsSaved] = useState(false);
  const currentLocation = useLocation();

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };
  const handleDeleteClick = () => {
    onDeleteClick(card.id);
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
          // src={card.image}
          src={`https://api.nomoreparties.co${card.image.url}`}
          alt={card.nameRU}
          className="card__image"
        />
      </a>
      {currentLocation.pathname === "/movies" && (
        <button
          className={`card__button ${isSaved ? "card__button_active" : ""}`}
          type="button"
          aria-label="Сохранить"
          onClick={handleSaveClick}
        >
          {isSaved ? "" : "Сохранить"}
        </button>
      )}
      {currentLocation.pathname === "/saved-movies" && (
        <button
          className="card__button card__button_delete"
          type="button"
          aria-label="Удалить"
          onClick={handleDeleteClick}
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
