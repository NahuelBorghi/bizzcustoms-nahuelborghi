import { CartItemCount } from "./CartItemCount/CartItemCount";
import { Shipping } from "./Shipping/Shipping";
import { CuotesCalculator } from "./CuotesCalculator/CuotesCalculator";
import "./ItemDetail.scss";

export const ItemDetail = ({article:{id,name,img,type,subType,price,color}}) => {
  return (
    <div>
      <div>
        <h2 id="nombre">{name}</h2>
        <p id="precios">${price}</p>
      </div>
      <CuotesCalculator></CuotesCalculator>
      <Shipping></Shipping>
      <CartItemCount></CartItemCount>
    </div>
  );
};
