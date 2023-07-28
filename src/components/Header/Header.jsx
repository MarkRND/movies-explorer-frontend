import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = ({ isLoggedIn }) => {
  return (
    <>
      <header className="header">
        <Logo />
        <Navigation isLoggedIn={isLoggedIn} />
      </header>
    </>
  );
};

export default Header;
