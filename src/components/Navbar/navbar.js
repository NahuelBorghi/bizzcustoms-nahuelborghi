import React from "react";
import { NavLink } from "react-router-dom";
function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/articles" activeClassName="" className="">Productos</NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="" className="">Compatibilidad</NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="" className="">Calcular Watts</NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="" className="">Contacto</NavLink>
        </li>
      </ul>
      <form id="search" action="" method="">
        <input
          type="search"
          placeholder="Buscar..."
          name="buscar"
          id="buscar"
        />
      </form>
    </nav>
  );
}
export default navbar;
