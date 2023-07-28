import './Techs.css';

const AboutProject = () => {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__line"></div>
        <h3 className="techs__quantity">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__items">
          <li className="techs__item">
            <p className="techs__item-name">HTML</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-name">CSS</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-name">JS</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-name">React</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-name">Git</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-name">Express.js</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-name">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutProject;
