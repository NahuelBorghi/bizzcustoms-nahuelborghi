import { CartItemCount } from "./CartItemCount/CartItemCount";
import { useState } from "react";
import { Shipping } from "./Shipping/Shipping";
import { CuotesCalculator } from "./CuotesCalculator/CuotesCalculator";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";

export const ItemDetail = ({article:{id,name,img,type,subType,price,color}}) => {
  const [toAdd,setToAdd] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [style,setStyle] = useState("none")
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
  const add = () => {
    setToAdd(parseInt(cantidad))
    setStyle("block")
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
      <button style={{display: style}}><Link exact to="/Cart">Terminar compra</Link></button>
    </div>
  );
};
