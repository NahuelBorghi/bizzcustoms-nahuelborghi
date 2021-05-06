import "./Item.scss";
import { Link } from "react-router-dom";
export const Item = ({article:{id,name,img,type,subType,price,color}}) => {
  const image = require(`../../../assets/images/productos/${img}`).default
  return (
      <Link to={`/articles/:${id}`}>
      <button className="article" value={id}>
        <img src={image} alt={img}/>
        <p className="producto">{name}</p>
        <p>$ {price}</p>
      </button>
      </Link>
  );
};
