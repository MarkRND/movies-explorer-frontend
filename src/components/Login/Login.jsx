import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Login.css";

const Login = () => {
  const [isValid, setIsValid] = useState(true);
  const defaultValues = {
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
    <main className="login">
      <Logo />
      <form className="login__form" name="login">
        <h2 className="login__title">Рады видеть!</h2>
        <div className="login__labels">
          <label className="login__label">
            <span className="login__text">E-mail</span>
            <input
              name="email"
              className="login__input"
              onChange={handleChange}
              value={inputs.email}
              type="email"
              required
            />
            <span className="login__error">Что-то пошло не так...</span>
          </label>
          <label className="login__label">
            <span className="login__text">Пароль</span>
            <input
              name="password"
              className="login__input"
              onChange={handleChange}
              value={inputs.password}
              type="password"
              required
            />
            <span className="login__error">Что-то пошло не так...</span>
          </label>
        </div>
        <button type="submit" className="login__button" disabled={!isValid}>
          Войти
        </button>
        <span className="login__block">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Login;
