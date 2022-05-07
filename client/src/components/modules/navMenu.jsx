import React from "react";

const NavMenuItem = ({ name, move }) => {
  return (
    <li onClick={move}>
      <span>{name}</span>
    </li>
  );
};

export default NavMenuItem;
