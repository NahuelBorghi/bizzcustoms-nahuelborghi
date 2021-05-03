import { CartItemCount } from "./CartItemCount/CartItemCount";
import { Shipping } from "./Shipping/Shipping";
import { CuotesCalculator } from "./CuotesCalculator/CuotesCalculator";
import "./ItemDetail.scss";

export const ItemDetail = (props) => {
  return (
    <div>
      <div>
        <h2 id="nombre">{props.nombre}</h2>
        <p id="precios">${props.precio}</p>
      </div>
      <CuotesCalculator></CuotesCalculator>
      <Shipping></Shipping>
      <CartItemCount></CartItemCount>
    </div>
  );
};
