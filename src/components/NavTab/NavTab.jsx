import React from "react";
import { Link } from "react-scroll";
import "./NavTab.css";

const NavTab = () => {
  return (
    <section className="nav-tab">
      <nav>
        <ul className="nav-tab__items">
          <li className="nav-tab__item">
            <Link
              className="nav-tab__link"
              smooth={true}
              duration={500}
              to="about-project__container"
            >
              О проекте
            </Link>
          </li>
          <li className="nav-tab__item">
            <Link
              className="nav-tab__link"
              smooth={true}
              duration={500}
              to="techs"
            >
              Технологии
            </Link>
          </li>
          <li className="nav-tab__item">
            <Link
              className="nav-tab__link"
              smooth={true}
              duration={500}
              to="about-me"
            >
              Студент
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavTab;
