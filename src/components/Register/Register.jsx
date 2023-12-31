import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.css";

const Register = () => {
  const [isValid, setIsValid] = useState(true);
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(defaultValues);

  const handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    setInputs((state) => ({ ...state, [name]: value }));
  };

  return (
    <main className="register">
      <div className="register__container">
      <Logo />
        <form className="register__form" name="register">
          <h2 className="register__title">Добро пожаловать!</h2>
          <div className="register__labels">
            <label className="register__label">
              <span className="register__text">Имя</span>
              <input
                name="name"
                className="register__input"
                onChange={handleChange}
                value={inputs.name}
                type="text"
                required
                minLength="2"
                maxLength="30"
                placeholder="Введите имя"
                
              />
              <span className="register__error">Что-то пошло не так...</span>
            </label>
            <label className="register__label">
              <span className="register__text">E-mail</span>
              <input
                name="email"
                className="register__input"
                onChange={handleChange}
                value={inputs.email}
                type="email"
                placeholder="Введите email"
              />
              <span className="register__error">
                Пользователь с таким email уже существует
              </span>
            </label>
            <label className="register__label">
              <span className="register__text">Пароль</span>
              <input
                name="password"
                className="register__input"
                onChange={handleChange}
                value={inputs.password}
                type="password"
                placeholder="Введите пароль"
                required
              />
              <span className="register__error">Что-то пошло не так...</span>
            </label>
          </div>
          <button
            type="submit"
            className="register__button"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <span className="register__block">
            Уже зарегистрированы?
            <Link to="/signin" className="register__link">
              Войти
            </Link>
          </span>
        </form>
      </div>
    </main>
  );
};

export default Register;
