import React from "react";
import { CartWidget } from "../Header/CartWidget/CartWidget";
function Header() {
  return (
    <header>
      <div>
        <button id="tema" type="button">
          Tema Oscuro
        </button>
      </div>
      <div className="carrito">
        <CartWidget />
      </div>
    </header>
  );
}
export default Header;
