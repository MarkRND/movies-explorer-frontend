import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Login.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const Login = ({ onLogin, serverError }) => {
  const { inputs, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();

  const handleAuthorizeSubmit = (evt) => {
    evt.preventDefault();
    onLogin(inputs);
    resetForm();
  };

  return (
    <main className="login">
      <Logo />
      <form
        className="login__form"
        name="login"
        onSubmit={handleAuthorizeSubmit}
      >
        <h2 className="login__title">Рады видеть!</h2>
        <div className="login__labels">
          <label className="login__label">
            <span className="login__text">E-mail</span>
            <input
              className="login__input"
              onChange={handleChange}
              value={inputs.email || ""}
              type="email"
              placeholder="Введите email"
              name="email"
              required
            />
            {errors.email && (
              <span className="login__error">{errors.email}</span>
            )}
          </label>
          <label className="login__label">
            <span className="login__text">Пароль</span>
            <input
              className="login__input"
              onChange={handleChange}
              value={inputs.password || ""}
              type="password"
              placeholder="Введите пароль"
              name="password"
              required
            />
            {errors.password && (
              <span className="login__error">{errors.password}</span>
            )}
          </label>
          <div className="login__buttons">
            <span className="login__error-server">{serverError}</span>
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
        </div>
      </form>
    </main>
  );
};

export default Login;
