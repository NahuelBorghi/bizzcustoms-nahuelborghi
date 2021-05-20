import { Item } from "../Item/Item";
import { useState } from "react";
import "./ItemList.scss";
import {getFireStore} from '../../firebase'

export const ItemList = () => {
  const [Articulos, setArticulos] = useState([]);
  const listadoDeProductos = async () => {
    const db = getFireStore()
    const itemCollection = db.collection("articles")
    itemCollection.get().then(
      (querySnapshot) => {
        if(querySnapshot.size === 0 ){
          //agregar estado para cuando se usen las categorias
        }
        setArticulos(querySnapshot.docs.map((doc) => doc.data()))
      }
    ).catch(
      (error) => console.error("firestore error:"+error)
    )
  };
  const NoProducts = () => {
    setArticulos([]);
  };
  return (
    <div id="articles">
      <button onClick={listadoDeProductos}>Ver Articulos</button>
      <button onClick={NoProducts}>No ver Articulos</button>
      {Articulos.length &&
        Articulos.map((Articulo) => (
          <Item
            article={Articulo}
          />
        ))}
    </div>
  );
};
