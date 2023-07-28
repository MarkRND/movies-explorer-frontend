import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import button from "../../images/button_search1.png";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" name="search">
          <input
            className="search-form__input"
            name="search"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            required
          />
          <button className="search-form__button" type="submit">
            <img
              className="search-form__img"
              src={button}
              alt="Кнопка поиска"
            />
          </button>
        </form>
        <FilterCheckbox />
        <div className="search-form_line"></div>
      </div>
    </section>
  );
};

export default SearchForm;
