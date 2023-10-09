import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./ErrorContent.css";

const ErrorContent = () => {
  let navigate = useNavigate();

  const clickBack = () => {
    navigate(-1);
  };

  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">Страница не найдена</p>
      <NavLink className="error__link" onClick={clickBack}>
        Назад
      </NavLink>
    </main>
  );
};

export default ErrorContent;
