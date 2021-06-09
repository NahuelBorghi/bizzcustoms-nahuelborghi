import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import {getFireStore} from '../../firebase'

export const ItemDetailContainer = () => {
  const itemId=useParams().id
  console.log(useParams())
  const [Article,setArticle] = useState([])
  useEffect(()=>{
    const db = getFireStore()
    const items = db.collection('articles')
    items.get().then(
      (querySnapshot) =>{
        let articulos = querySnapshot.docs.map((doc) => doc.data())
        setArticle(articulos.find((item) => item.id === itemId))
      }
    )
  },[])
  return (
    <div id="Detail">
      <ItemDetail article={Article}></ItemDetail>
    </div>
  );
};
