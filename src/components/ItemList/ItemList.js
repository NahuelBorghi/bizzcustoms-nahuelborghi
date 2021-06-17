import { Item } from "../Item/Item";
import { useEffect, useState } from "react";
import "./ItemList.scss";
import { getFireStore } from "../../firebase";
import { Filter } from "../filter";
import { useParams } from "react-router";
import {Loading} from "./components/Loading/Loading";

export const ItemList = () => {
  const { type, color } = useParams();
  const [Articulos, setArticulos] = useState([]);
  const [category, setCategory] = useState([]);
  //set loading en true
  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("articles");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setArticulos([]);
          setCategory([{ id: 0, imagesId: ["noImage.png"], name: "No results", price: 0 }]);
        } else if (!type){
          setCategory([{ id: 0, imagesId: ["noImage.png"], name: "No results", price: 0 }]);
        } else if (type!="all"){
          setCategory(querySnapshot.docs.filter((article) => article.type === type));
        }else{
          setCategory(querySnapshot.docs.map((doc) => doc.data()));
        }
          setArticulos(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => console.error("firestore error:" + error))
      .finally(setCategory(Articulos))
  }, []);

  useEffect(() => {
    if(type === "all" && !color && Articulos){
      setCategory(Articulos)
    }else if (type === "all" && color && Articulos) {
      setCategory(Articulos.filter((article) => article.colors.includes(color)));
    }else if(type && color && Articulos){
      setCategory(Articulos.filter((article) => article.type === type && article.colors.includes(color)));
    }else if(type && !color && Articulos){
      setCategory(Articulos.filter((article) => article.type === type));
    }else{
      setCategory([{ id: 0, imagesId: ["noImage.png"], name: "No results", price: 0 }]);
    }
  }, [type,color]);
  //set loading en false

  return (
    <section>
      <Filter/>
      <div id="articles">
        {Articulos && category.map((Articulo) => <Item article={Articulo}/>)}
      </div>
    </section>
  );
};
