import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__line"></div>
        <ul className="about-project__items">
          <li className="about-project__item">
            <h3 className="about-project__item-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__item-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__item">
            <h3 className="about-project__item-title">
              На&nbsp;выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__item-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые
              нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="about-project__time">
          <div className="about-project__backend">
            <span className="about-project__tech-time about-project__tech-time_grin">1 неделя</span>
            <span className="about-project__time-title">Back-end</span>
          </div>
          <div className="about-project__frontend">
            <span className="about-project__tech-time">4 недели</span>
            <span className="about-project__time-title">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
