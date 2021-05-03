import React from "react";
function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="./">Productos</a>
        </li>
        <li>
          <a href="./">Compatibilidad</a>
        </li>
        <li>
          <a href="./">Calcular Watts</a>
        </li>
        <li>
          <a href="./">Contacto</a>
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
