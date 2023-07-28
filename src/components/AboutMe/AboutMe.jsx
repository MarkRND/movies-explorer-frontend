import avatar from '../../images/ava.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__line"></div>
        <div className="about-me__description">
          <img
            className="about-me__avatar"
            src={avatar}
            alt="MarkusRND"
          />
          <div className="about-me__text">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__age">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__me">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать
              музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <a
              className="about-me__link"
              rel="noreferrer"
              href="https://github.com"
              title="Github"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
