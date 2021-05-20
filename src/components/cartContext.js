import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [Cart,setCart] = useState([])
    const [cartQuantity,setQuantity] = useState(0)
    const [Total,setTotal] = useState(0)

    const addItem = (item,quantity) =>{
        let article = isInCart(item.id)
        let price = 0,oldPrice =0,newQuantity=quantity+article.quantity
        if(article === false){
            setCart([...Cart,{item,quantity}])
            setQuantity(cartQuantity+quantity)
            price = item.price*quantity
            setTotal(Total+price)
        }else if(newQuantity<=item.stock){
            setQuantity(cartQuantity+quantity)
            oldPrice = item.price*article.quantity
            quantity+=article.quantity
            alert(quantity)
            let newCart = Cart.filter((carrito)=> carrito.item === item)
            console.log(newCart)
            setCart([...newCart,{item,quantity}])
            price = item.price*quantity
            setTotal(Total-oldPrice+price)
            console.log(Cart)
        }else{
            alert("no hay mas stock")
        }
    }
    //arreglar problema de duplicados
    const removeItem = (itemId) =>{
        let toDelete = Cart.find((carrito) => carrito.item.id === itemId)
        let price = toDelete.item.price*toDelete.quantity
        setTotal(Total-price)
        setCart(Cart.filter((carrito) => carrito !== toDelete))
        console.log(Cart)
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
            return getItem(itemId)
        }else{
        return false}
    }

    return <CartContext.Provider value={{Total,Cart,addItem,removeItem,clear,isInCart,cartQuantity}}>
            {children}
        </CartContext.Provider>
}