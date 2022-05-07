import React from "react";

const NavMenu = ({ name, move }) => {
  return (
    <li onClick={move}>
      <span>{name}</span>
    </li>
  );
};

export default NavMenu;
