import "./Item.scss";
import { Link } from "react-router-dom";
export const Item = ({article:{colors,id,imagesId,name,price,stock,type}}) => {
  const image = require(`../../assets/images/productos/${imagesId[0]}`).default
  if (stock > 0){
    return (
        <Link to={`/articles/${id}`}>
          <button className="article" value={id}>
            <img src={image} alt={imagesId[0]}/>
            <p className="producto">{name}</p>
            <p>$ {price}</p>
          </button>
        </Link>
    )
  }else{
    return (
      <Link to={`/articles/${id}`}>
        <button className="article" value={id} disabled>
          <img src={image} alt={imagesId[0]}/>
          <p className="producto">{name}</p>
        </button>
      </Link>
  )
  }
};
