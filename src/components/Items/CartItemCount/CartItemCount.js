import { useState } from "react"
import "./CartItemCount.scss"

export const CartItemCount = () => {
    const [cantidad,setCantidad] = useState()
    console.log(cantidad)
    const stock=10;
    return(
        <div id="agregarCarrito">
            <p>carrito</p>
            <form action="" name="cantidad" id="cantidad">
                <input name="agregar" type="number" min="1" max={stock} onChange={(e) => setCantidad(e.target.value)}></input>
                <input type="button" value="agregar al carrito"/>
            </form>
        </div>
    )
}