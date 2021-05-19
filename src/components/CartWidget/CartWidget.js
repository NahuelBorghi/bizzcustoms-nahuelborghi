import { useContext } from "react";
import carrito from "../../assets/images/carro.png";
import { CartContext } from "../cartContext";
import "./CartWidget.scss"

export const CartWidget = () => {
  const context = useContext(CartContext)
  return (
    <a  id="cart" href="./">
      <img src={carrito} alt="carrito" />
      <p>{context.cartQuantity}</p>
    </a>
  );
};
