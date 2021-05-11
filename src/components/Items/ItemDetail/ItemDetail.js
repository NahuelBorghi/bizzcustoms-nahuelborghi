import { CartItemCount } from "./CartItemCount/CartItemCount";
import { useState } from "react";
import { Shipping } from "./Shipping/Shipping";
import { CuotesCalculator } from "./CuotesCalculator/CuotesCalculator";
import "./ItemDetail.scss";

export const ItemDetail = ({article:{id,name,img,type,subType,price,color}}) => {
  const [toAdd,setToAdd] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const stock = 10;
  const suma = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const resta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const add = () => {setToAdd(parseInt(cantidad))
  }
  return (
    <div>
      <div>
        <h2 id="nombre">{name}</h2>
        <p id="precios">${price}</p>
      </div>
      <CuotesCalculator></CuotesCalculator>
      <Shipping></Shipping>
      <CartItemCount onAdd={add} suma={suma} resta={resta} cantidad={cantidad}></CartItemCount>
    </div>
  );
};
