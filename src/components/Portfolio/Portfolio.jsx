import "./Portfolio.css";
import strelka from "../../images/stelk-min.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects-items">
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/MarkRND/how-to-learn"
              title="how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
              <img
                className="portfolio__indicator"
                src={strelka}
                alt="стрелка"
              />
            </a>
          </li>

          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/MarkRND/russian-travel"
              title="russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
              <img
                className="portfolio__indicator"
                src={strelka}
                alt="стрелка"
              />
            </a>
          </li>

          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/MarkRND/react-mesto-api-full-gha"
              title="react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <img
                className="portfolio__indicator"
                src={strelka}
                alt="стрелка"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
