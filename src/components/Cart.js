import { useContext } from "react"
import { CartContext } from "./cartContext"

export const CartContainer = () =>{
    const cart = useContext(CartContext)
    
    /*if(cart.Cart.length > 0){
        return (<>
            {cart.Cart.map((detail) => (
            <div className="cartItem">
            <p>{detail.item.name}</p>
            <img src={require(`../assets/images/productos/${detail.item.img}`).default} alt={detail.item.img}/>
            <p>${detail.item.price} x {detail.quantity} ={detail.item.price*detail.quantity}</p>
            <button onClick={()=> cart.removeItem(detail.item.id)}>eliminar</button>
            </div>
            ))}
            <h1>{cart.Total}</h1>
            </>)
    }
    return <h1>F</h1>*/
    return  <>
            {cart.cartQuantity > 0 ? <>
            {cart.Cart.map((detail) => (
                <div className="cartItem">
                <p>{detail.item.name}</p>
                <img src={require(`../assets/images/productos/${detail.item.img}`).default} alt={detail.item.img}/>
                <p>${detail.item.price} x {detail.quantity} ={detail.item.price*detail.quantity}</p>
                <button onClick={()=> cart.removeItem(detail.item.id)}>eliminar</button>
                </div>
                ))}
                <h1>{cart.Total}</h1></> : 
                <h1>F</h1>}
            </>
}