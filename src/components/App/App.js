import "./App.css";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import ErrorContent from "../ErrorContent/ErrorContent";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import apiMain from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useLocationAwareness from "../../hooks/useLocationAwareness";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  allowedHeader,
  allowedFooter,
  CONNECTION_PROBLEM,
  EMAIL_ERROR,
  DATA_OK,
  REG_ERROR,
  LOGIN_ERROR,
  TOKEN_ERROR,
  PROFILE_ERROR,
} from "../constants/constants";
import { SaveMoviesProvider } from "../../contexts/SaveMoviesContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successfully, setSuccessfully] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [saveMovies, setSaveMovies] = useState([]);
  const showHeader = useLocationAwareness(allowedHeader, location);
  const showFooter = useLocationAwareness(allowedFooter, location);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([apiMain.getInfoUser(), apiMain.getMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSaveMovies(movies);
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            setServerError(CONNECTION_PROBLEM);
          }
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      apiMain
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          navigate(location);
        })
        .catch(console.error);
    }
  }, []);

  const handleDeleteMovie = async (id) => {
    try {
      await apiMain.deleteMovie(id);
      setSaveMovies((prevState) =>
        prevState.filter((movies) => movies._id.toString() !== id.toString())
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddMovie = async (data) => {
    try {
      const newMovie = await apiMain.addMovie(data);
      if (newMovie) {
        setSaveMovies((prevMovies) => [newMovie, ...prevMovies]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
    localStorage.clear();
    setCurrentUser({});
  };

  const handleRegister = async (inputs) => {
    try {
      await apiMain.register(inputs);
      handleLogin(inputs);
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setServerError(EMAIL_ERROR);
      } else {
        setServerError(REG_ERROR);
      }
    }
  };

  const handleLogin = async (inputs) => {
    try {
      const res = await apiMain.authorize(inputs);
      if (res.token) {
        localStorage.setItem("token", res.token);
        setIsLoggedIn(true);
        navigate("/movies", { replace: true });
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setServerError(LOGIN_ERROR);
      } else {
        setServerError(TOKEN_ERROR);
      }
    }
  };

  const handleEditUser = async (userInfo) => {
    try {
      const newUserInfo = await apiMain.editUser(userInfo);
      setCurrentUser(newUserInfo);

      setSuccessfully(DATA_OK);
      setServerError(null);
    } catch (err) {
      if (err.response.status === 409) {
        setServerError(EMAIL_ERROR);
      } else {
        setServerError(PROFILE_ERROR);
      }
      setSuccessfully(null);
    }
  };

  setTimeout(() => {
    setServerError("");
    setSuccessfully("");
  }, 10000);

  const clearServerError = () => {
    setServerError("");
    setSuccessfully("");
  };

  useEffect(() => {
    clearServerError();
  }, [location]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SaveMoviesProvider>
        <div className="page">
          <div className="page__content">
            {showHeader && <Header isLoggedIn={isLoggedIn} />}
            <Routes>
              <Route path="/" element={<Main />} />

              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    isLoggedIn={isLoggedIn}
                    saveMovies={saveMovies}
                    onAddMovie={handleAddMovie}
                    onDeleteMovie={handleDeleteMovie}
                  />
                }
              />

              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    isLoggedIn={isLoggedIn}
                    movies={saveMovies}
                    serverError={serverError}
                    onAddMovie={handleAddMovie}
                    onDeleteMovie={handleDeleteMovie}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    isLoggedIn={isLoggedIn}
                    onEditUser={handleEditUser}
                    onLogout={handleLogout}
                    serverError={serverError}
                    setServerError={setServerError}
                    successfully={successfully}
                  />
                }
              />

              <Route
                path="/signin"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Login onLogin={handleLogin} serverError={serverError} />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Register
                      onRegister={handleRegister}
                      serverError={serverError}
                    />
                  )
                }
              />
              <Route path="*" element={<ErrorContent />} />
            </Routes>
            {showFooter && <Footer />}
          </div>
        </div>
      </SaveMoviesProvider>
    </CurrentUserContext.Provider>
  );
};

export default App;
