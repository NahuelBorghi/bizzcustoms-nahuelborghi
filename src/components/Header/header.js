import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
function Header() {
  return (
    <header>
      <div>
        {/*aca va el boton de cambio de tema*/}
      </div>
      <Link exact to="/Cart" className="carrito">
        <CartWidget />
      </Link>
    </header>
  );
}
export default Header;
