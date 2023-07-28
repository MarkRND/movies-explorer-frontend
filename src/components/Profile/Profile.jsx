import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <main className="profile">
      <form className="profile__form" name="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__labels">
          <label className="profile__label">
            <p className="profile__text">Имя</p>
            <input
              className="profile__input"
              name="name"
              type="text"
              value="Виталий"
              minLength="2"
              maxLength="30"
              required
            />
          </label>
          <span className="profile__error">Что-то пошло не так...</span>
          <div className="profile__line"></div>
          <label className="profile__label">
            <span className="profile__text">E-mail</span>
            <input
              className="profile__input"
              name="email"
              type="email"
              value="pochta@yandex.ru"
              required
            />
          </label>
          <span className="profile__error">
            Пользователь с таким email уже существует
          </span>
        </div>
        <button type="submit" className="profile__button">
          Редактировать
        </button>
        <span className="profile__block">
          <Link to="/" className="profile__link">
            Выйти из аккаунта
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Profile;
