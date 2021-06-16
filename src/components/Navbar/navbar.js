import React from "react";
import { NavLink } from "react-router-dom";
function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/category/all/" activeClassName="active" className="">Productos</NavLink>
        </li>
        <li>
          <NavLink exact to="/compat" activeClassName="active" className="">Compatibilidad</NavLink>
        </li>
        <li>
          <NavLink exact to="/watts" activeClassName="active" className="">Calcular Watts</NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="active" className="">Contacto</NavLink>
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
