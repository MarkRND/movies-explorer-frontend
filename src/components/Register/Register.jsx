import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { EMAIL_VALID } from "../constants/constants";

const Register = ({ onRegister, serverError }) => {
  const { inputs, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();

  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    onRegister(inputs);
    resetForm();
  };

  return (
    <main className="register">
      <div className="register__container">
        <Logo />
        <form
          className="register__form"
          name="register"
          onSubmit={handleRegisterSubmit}
        >
          <h2 className="register__title">Добро пожаловать!</h2>
          <div className="register__labels">
            <label className="register__label">
              <span className="register__text">Имя</span>
              <input
                name="name"
                className="register__input"
                onChange={handleChange}
                value={inputs.name || ""}
                type="text"
                required
                minLength="2"
                maxLength="30"
                placeholder="Введите имя"
              />
              {errors.name && (
                <span className="register__error">{errors.name}</span>
              )}
            </label>
            <label className="register__label">
              <span className="register__text">E-mail</span>
              <input
                name="email"
                className="register__input"
                onChange={handleChange}
                value={inputs.email || ""}
                type="email"
                placeholder="Введите email"
                required
                pattern={EMAIL_VALID}
              />

              {errors.email && (
                <span className="register__error">{errors.email}</span>
              )}
            </label>
            <label className="register__label">
              <span className="register__text">Пароль</span>
              <input
                name="password"
                className="register__input"
                onChange={handleChange}
                value={inputs.password || ""}
                type="password"
                placeholder="Введите пароль"
                required
              />
              {errors.password && (
                <span className="register__error">{errors.password}</span>
              )}
            </label>
          </div>
          <div className="register__buttons">
            <span className="register__error-server">{serverError}</span>
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
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
