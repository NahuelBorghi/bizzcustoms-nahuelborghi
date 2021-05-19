import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [Cart,setCart] = useState([])
    const [cartQuantity,setQuantity] = useState(0)
    const [Total,setTotal] = useState(0)

    const addItem = (item,quantity) =>{
        setCart([...Cart,{item,quantity}])
        setQuantity(cartQuantity+quantity)
        let price = item.price*quantity
        setTotal(Total+price)
    }
    const removeItem = (itemId) =>{
        let toDelete = Cart.find((carrito) => carrito.item.id === itemId)
        let price = toDelete.item.price*toDelete.quantity
        setTotal(Total-price)
        setCart(Cart.filter((carrito) => carrito !== toDelete))
        setQuantity(cartQuantity-toDelete.quantity)
    }
    const clear = () =>{
        setCart([])
        setTotal(0)
        setQuantity(0)
        console.log(Cart)
    }
    const getItem = (itemId) =>{
        return Cart.find(obj => obj.item.id === itemId)
    }
    const isInCart = (itemId) =>{
        if (getItem(itemId) !== undefined){
            return false
        }
    }

    return <CartContext.Provider value={{Total,Cart,addItem,removeItem,clear,isInCart,cartQuantity}}>
            {children}
        </CartContext.Provider>
}