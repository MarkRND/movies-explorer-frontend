import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__line"></div>
        <nav className="footer__navigation">
          <p className="footer__copyright">&copy; {date}</p>
          <ul className="footer__links">
            <li>
              <a
                className="footer__link"
                href="https://practicum.yandex.ru"
                rel="noreferrer"
                title="Яндекс Практикум"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://github.com"
                rel="noreferrer"
                title="GitHub"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
