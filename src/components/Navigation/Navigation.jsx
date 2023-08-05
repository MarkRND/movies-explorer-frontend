import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import menu from "../../images/main-menu-min.svg";
import "./Navigation.css";
import close from "../../images/close_menu-min.svg";

const Navigation = ({ isLoggedIn }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <section className="navigation">
      {!isLoggedIn ? (
        <nav>
          <ul className="navigation__main">
            <li>
              <NavLink className="navigation__button" to="/signup">
                Регистрация
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signin"
                className="navigation__button navigation__button_in"
              >
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navigation__films">
          <ul className="navigation__films-buttons">
            <li>
              <NavLink
                to="/movies"
                className="navigation__button navigation__button_films"
                activeclassname="active"
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className="navigation__button navigation__button_save"
                activeclassname="active"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <div className="navigation__button-container">
            <NavLink
              to="/profile"
              className="navigation__button navigation__button_account"
              activeclassname="active"
            >
              Аккаунт
            </NavLink>

            <div className="navigation__burger-menu">
              <div
                className={`navigation__menu-button ${
                  isMenuOpen ? "active" : ""
                }`}
                onClick={handleMenuClick}
              >
                <img
                  className="navigation__burger"
                  src={menu}
                  alt="Burger Menu"
                />
              </div>
              <div
                className={`navigation__menu-items ${
                  isMenuOpen ? "active" : ""
                }`}
              >
                <div
                  className="navigation__menu-close"
                  onClick={handleMenuItemClick}
                >
                  <img src={close} alt="Burger Menu" />
                </div>
                <ul className="navigation__menu">
                  <li>
                    <NavLink
                      to="/"
                      className="navigation__name"
                      activeclassname="active"
                    >
                      Главная
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/movies"
                      className="navigation__name"
                      activeclassname="active"
                    >
                      Фильмы
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/saved-movies"
                      className="navigation__name"
                      activeclassname="active"
                    >
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                </ul>
                <NavLink
                  to="/profile"
                  className="navigation__account"
                  activeclassname="active"
                >
                  Аккаунт
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      )}
    </section>
  );
};

export default Navigation;
