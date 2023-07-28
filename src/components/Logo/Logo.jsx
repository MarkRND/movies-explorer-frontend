import { NavLink } from "react-router-dom";
import logo from "../../images/logo/header-logo.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <>
      <NavLink to="/" className="logo">
        <img src={logo} alt="логотип" />
      </NavLink>
    </>
  );
};

export default Logo;
