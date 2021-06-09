import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";

export const CartContainer = () => {
  const cart = useContext(CartContext);

  return (
    <section>
      {cart.cartQuantity > 0 ? (
        <>
          {cart.Cart.map((detail) => (
            <div className="cartItem">
              <p>{detail.item.name}</p>
              <img src={require(`../assets/images/productos/${detail.item.imagesId}`).default}alt={detail.item.imagesId}/>
              <p>${detail.item.price} x {detail.quantity} ={detail.item.price * detail.quantity}</p>
              <button onClick={() => cart.removeItem(detail.item.id)}>eliminar</button>
            </div>
          ))}
          <h1>{cart.Total}</h1>
          <div>
            {cart.userInfo != undefined && cart.orderId != undefined ? (
              <button onClick={() => {cart.clear();}}>
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
                  <Link exact to="/articles">
                    Agregar productos
                  </Link>
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <h1>Aun no ha agregado items al carrito</h1>
          <button><Link exact to="/articles">Agregar articulos</Link></button>
        </>
      )}
    </section>
  );
};
