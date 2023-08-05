import React, { useState } from "react";
import button from "../../images/button_search-min.svg";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({ onFilterMovies, onSwitch, onCheckbox }) => {
  const [value, setValue] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsButtonDisabled(!e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterMovies(value.toLowerCase());
  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form
          className="search-form__form"
          name="search"
          onSubmit={handleSubmit}
        >
          <input
            className="search-form__input"
            name="search"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            required
            onChange={handleChange}
            value={value}
          />
          <button
            className={`search-form__button ${
              isButtonDisabled ? "disabled" : ""
            }`}
            type="submit"
            disabled={isButtonDisabled}
          >
            <img
              className="search-form__img"
              src={button}
              alt="Кнопка поиска"
            />
          </button>
        </form>
        <FilterCheckbox onSwitch={onSwitch} onCheckbox={onCheckbox} />
        <div className="search-form_line"></div>
      </div>
    </section>
  );
};

export default SearchForm;
