import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
function Header() {
  return (
    <header>
      <div>
        <button id="tema" type="button">
          Tema Oscuro
        </button>
      </div>
      <Link exact to="/Cart" className="carrito">
        <CartWidget />
      </Link>
    </header>
  );
}
export default Header;
