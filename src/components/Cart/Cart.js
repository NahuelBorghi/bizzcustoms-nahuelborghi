import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";
import "./Cart.scss"
export const CartContainer = () => {
  const cart = useContext(CartContext);

  return (
    <section className="cart">
      {cart.cartQuantity > 0 ? (
        <>
          <h1 className="title">Carrito de compras</h1>
          <div className="content">
            {cart.Cart.map((detail) => (
              <div className="cartItem">
                <img src={require(`../../assets/images/productos/${detail.item.imagesId}`).default}alt={detail.item.imagesId}/>
                <p>{detail.item.name}</p>
                <p>${detail.item.price} x {detail.quantity} ={detail.item.price * detail.quantity}</p>
                <button onClick={() => cart.removeItem(detail.item.id)}>eliminar</button>
              </div>
            ))}
          </div>
          <h1 className="total">{cart.Total}</h1>
          <div className="buttons">
            {cart.userInfo !== undefined && cart.orderId !== undefined ? (
              <button>
                <Link exact to={`/order/${cart.orderId}`}>
                  Finalizar compra
                </Link>
              </button>
            ) : (
              <>
                <button>
                  <Link exact to="/userInfo">
                    Comprar
                  </Link>
                </button>
                <button>
                  <Link exact to="/category/all/">
                    Agregar productos
                  </Link>
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className="title">Aun no ha agregado items al carrito</h1>
          <div className="content"></div>
          <div className="buttons">
            <button><Link exact to="/category/all/">Agregar articulos</Link></button>
          </div>
        </>
      )}
    </section>
  );
};
