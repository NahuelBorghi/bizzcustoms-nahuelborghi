import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./cartContext"

export const CartContainer = () =>{
    const cart = useContext(CartContext)
    
    return  <>
            {cart.cartQuantity > 0 ? <>
            {cart.Cart.map((detail) => (
                <div className="cartItem">
                <p>{detail.item.name}</p>
                <img src={require(`../assets/images/productos/${detail.item.imagesId}`).default} alt={detail.item.imagesId}/>
                <p>${detail.item.price} x {detail.quantity} ={detail.item.price*detail.quantity}</p>
                <button onClick={()=> cart.removeItem(detail.item.id)}>eliminar</button>
                </div>
                ))}
                <h1>{cart.Total}</h1></> : 
                <>
                    <h1>Aun no ha agregado items al carrito</h1>
                    <Link exact to="/articles"><button>Agregar articulos</button></Link>
                </>}
            </>
}