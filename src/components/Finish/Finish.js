import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFireStore } from "../../firebase";
import { CartContext } from "./../cartContext";
import "./finish.scss"

export const Finish = () => {
  const [order, setOrder] = useState([]);
  const {orderId} = useParams()
  const cart = useContext(CartContext);
  console.log(order)
  useEffect(async () => {
    const db = getFireStore();
    await db
      .collection("orders")
      .doc(orderId)
      .get()
      .then((document) => setOrder(document.data()));
    console.log(order);
    console.log(orderId);
    cart.clear()
  }, []);

  return (
    <section>
      {order.buyer!=undefined ? (
      <div id="orderInfo">
        <div>
          <h2>Cliente</h2>
          <p>Nombre: {order.buyer.fullName}</p>
          <p>Mail: {order.buyer.email}</p>
        </div>
        <div>
          <h2>Envio</h2>
          <p>Ciudad de destino: {order.buyer.address.city}</p>
          <p>Calle de destino: {order.buyer.address.streetName}</p>
        </div>
      </div>
      ):(
        <div>Cargando informacion del Pedido...</div>
      )}
      {order.items != undefined ? (
        <>
          {order.items.map((detail) => (
            <div className="orderItem">
              <img src={require(`../../assets/images/productos/${detail.item.imagesId}`).default} alt={detail.item.imagesId}/>
              <p> {detail.item.name} </p>
              <p> ${detail.item.price} x {detail.quantity} = $ {detail.item.price * detail.quantity} </p>
            </div>
          ))}
          <h1> $ {order.total} </h1>
        </>
      ) : (
        <> </>
      )}
    </section>
  );
};
