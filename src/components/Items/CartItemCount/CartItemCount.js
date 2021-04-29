import { useState } from "react"
import "./CartItemCount.scss"

export const CartItemCount = () => {
    const [cantidad,setCantidad] = useState(0)
    console.log(cantidad)
    const stock=10;
    const suma = () => {if(cantidad<stock){setCantidad(cantidad+1)}}
    const resta = () => {if(cantidad>1){setCantidad(cantidad-1)}}
    return(
        <div id="agregarCarrito">
            <p>carrito</p>
            <input name="agregar" type="number" value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))}></input>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <input type="button" value="agregar al carrito"/>
        </div>
    )
}