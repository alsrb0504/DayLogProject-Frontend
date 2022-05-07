import React from "react";

const NavMenuItem = ({ name, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <li onClick={handleClick}>
      <span>{name}</span>
    </li>
  );
};

export default NavMenuItem;
