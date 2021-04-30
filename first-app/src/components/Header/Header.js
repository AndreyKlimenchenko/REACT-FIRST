import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <button className="header-btn">Model S</button>
      <button className="header-btn">Model X</button>
      <button className="header-btn">Model 3</button>
      <button className="header-btn">Model Y</button>
      <button className="header-btn">Roadster</button>
    </header>
  );
};

export default Header;