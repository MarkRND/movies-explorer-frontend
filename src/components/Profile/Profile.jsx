import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./Profile.css";

const Profile = ({ onLogout, onEditUser, serverError, successfully }) => {
  const currentUser = useContext(CurrentUserContext);
  const { inputs, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm({
        name: currentUser.name || "",
        email: currentUser.email || "",
      });
    }
  }, [currentUser, resetForm]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = (evt) => {
    evt.preventDefault();
    if (isValid) {
      onEditUser({
        name: inputs.name,
        email: inputs.email,
      });

      setEditMode(false);
    }
  };
  const isSaveButtonActive =
    isValid &&
    (inputs.name !== currentUser.name || inputs.email !== currentUser.email);

  return (
    <main className="profile">
      <form className="profile__form" name="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <div className="profile__labels">
          <label className="profile__label">
            <p className="profile__text">Имя</p>
            <input
              className="profile__input"
              name="name"
              type="text"
              value={inputs.name || ""}
              minLength="2"
              maxLength="30"
              required
              readOnly={!editMode}
              onChange={handleChange}
            />
          </label>

          {errors.name && <span className="profile__error">{errors.name}</span>}
          <div className="profile__line"></div>
          <label className="profile__label">
            <span className="profile__text">E-mail</span>

            <input
              className="profile__input"
              name="email"
              type="email"
              value={inputs.email || ""}
              required
              readOnly={!editMode}
              onChange={handleChange}
              pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,}"
            />
          </label>

          {errors.email && (
            <span className="profile__error">{errors.email}</span>
          )}
        </div>
        <div className="profile__container">
          <span className="profile__error-server profile__error-server-ок">
            {successfully}
          </span>
          {serverError && (
            <span className="profile__error-server">{serverError}</span>
          )}
          {editMode ? (
            <button
              type="submit"
              className="profile__button profile__button_save"
              onClick={handleSaveClick}
              disabled={!isSaveButtonActive}
            >
              Сохранить
            </button>
          ) : (
            <div className="profile__buttons">
              <button
                type="button"
                className="profile__button"
                onClick={handleEditClick}
              >
                Редактировать
              </button>
              <button
                type="button"
                className=" profile__button profile__button_out"
                onClick={onLogout}
              >
                Выйти из аккаунта
              </button>
            </div>
          )}
        </div>
      </form>
    </main>
  );
};

export default Profile;
