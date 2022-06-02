import React from "react";

const NavMenuItem = ({ name, onClick, logout }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <li
      className={`slide-bar-nav-item ${logout ? "slide-bar-nav-logout" : ""}`}
      onClick={handleClick}
    >
      <span className="slide-bar-nav-item-name">{name}</span>
    </li>
  );
};

export default NavMenuItem;
