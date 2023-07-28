import React from "react";
import { Link } from "react-router-dom";
import "./ErrorContent.css";

const ErrorContent = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">Страница не найдена</p>
      <Link className="error__link" onClick={handleGoBack}>
        Назад
      </Link>
    </main>
  );
};

export default ErrorContent;
