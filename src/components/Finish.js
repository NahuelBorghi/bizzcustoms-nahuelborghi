import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFireStore } from "../firebase";

export const Finish = () => {
  const [order, setOrder] = useState([]);
  const {orderId} = useParams()
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
  }, []);

  return (
    <>
      {order.items != undefined ? (
        <>
          {order.items.map((detail) => (
            <div className="orderItem">
              <p>{detail.item.name}</p>
              <img
                src={
                  require(`../assets/images/productos/${detail.item.imagesId}`)
                    .default
                }
                alt={detail.item.imagesId}
              />
              <p>
                ${detail.item.price} x {detail.quantity} =
                {detail.item.price * detail.quantity}
              </p>
            </div>
          ))}
          <h1>{order.total}</h1>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
