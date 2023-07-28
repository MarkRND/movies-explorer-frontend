import MoviesCard from "../MoviesCard/MoviesCard";
import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import api from "../../utils/ApiMovies";
const MoviesCardList = () => {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(12);
  useEffect(() => {
    api
      .getMovies()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

  const handleCardDelete = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const handleCardClick = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };

  return (
    <section className="movies-card">
      <ul className="movies-card__block">
        {cards.slice(0, visibleCards).map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            onDeleteClick={handleCardDelete}
          />
        ))}
      </ul>
      <div className="movies-card__сontainer">
        {cards.length > 9 && visibleCards < cards.length && (
          <button className="movies-card__button" onClick={handleCardClick}>
            Ещё
          </button>
        )}
      </div>
    </section>
  );
};

export default MoviesCardList;
