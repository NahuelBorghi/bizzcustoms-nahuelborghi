import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [Cart,setCart] = useState([])
    const [cartQuantity,setQuantity] = useState(0)

    const addItem = (item,quantity) =>{
        setCart([...Cart,{item,quantity}])
        setQuantity(Cart.length)
        console.log(Cart)
    }
    const removeItem = (itemId) =>{
        setCart(Cart.map((carrito) => carrito.item.id !== itemId))
        setQuantity(Cart.length)
    }
    const clear = () =>{
        setCart([])
        setQuantity(Cart.length)
        console.log(Cart)
    }
    const getItem = (itemId) =>{
        return Cart.find(obj => obj.item.id === itemId)
    }
    const isInCart = (itemId) =>{
        return itemId === undefined ? undefined : getItem(itemId) !== undefined
    }

    return <CartContext.Provider value={{Cart,addItem,removeItem,clear,isInCart,cartQuantity}}>
            {children}
        </CartContext.Provider>
}