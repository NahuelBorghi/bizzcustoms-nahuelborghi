import { CartItemCount } from "../CartItemCount/CartItemCount";
import { useContext, useState } from "react";
import { Shipping } from "../Shipping";
import { CuotesCalculator } from "../CuotesCalculator";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";
import { CartContext } from "../cartContext";

export const ItemDetail = ({article:{colors,id,imagesId,name,price,stock,subtype,type}}) => {
  const cart = useContext(CartContext)
  const [Add,setAdd] = useState(0)
  const [quantity, setQuantity] = useState(0);
  const [style,setStyle] = useState("none")
  console.log(name)
  const suma = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const resta = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
      console.log(quantity)
  };
  const toAdd = () => {
    setAdd(quantity)
    setStyle("block")
  }
  const add = () =>{
    cart.addItem({colors,id,imagesId,name,price,stock,subtype,type},Add)
    setQuantity(0)
  }
  return (
    <div>
      <div>
        <h2 id="nombre">{name}</h2>
        <p id="precios">${price}</p>
      </div>
      <CuotesCalculator></CuotesCalculator>
      <Shipping></Shipping>
      <CartItemCount onAdd={toAdd} suma={suma} resta={resta} cantidad={quantity}></CartItemCount>
      <button onClick={add} style={{display: style}}><Link exact to="/Cart">Terminar compra</Link></button>
    </div>
  );
};
