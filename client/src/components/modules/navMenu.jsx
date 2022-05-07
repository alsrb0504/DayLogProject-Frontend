import React from "react";

const NavMenuItem = ({ name, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <li className="slide-bar-nav-item" onClick={handleClick}>
      <span className="slide-bar-nav-item-name">{name}</span>
    </li>
  );
};

export default NavMenuItem;
