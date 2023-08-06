import React, { createContext, useContext, useState } from "react";

const SaveMoviesContext = createContext();

export const useSaveMoviesContext = () => {
  return useContext(SaveMoviesContext);
};

export const SaveMoviesProvider = ({ children }) => {
  const [saveMovies, setSaveMovies] = useState([]);

  return (
    <SaveMoviesContext.Provider value={{ saveMovies, setSaveMovies }}>
      {children}
    </SaveMoviesContext.Provider>
  );
};
