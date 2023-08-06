import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ErrorContent.css";

const ErrorContent = () => {
  const navigate = useNavigate();

  const clickBack = () => {
    navigate(-1);
  };

  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">Страница не найдена</p>
      <Link className="error__link" onClick={clickBack}>
        Назад
      </Link>
    </main>
  );
};

export default ErrorContent;
