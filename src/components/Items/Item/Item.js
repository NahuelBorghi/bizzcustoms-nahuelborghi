import "./Item.scss"
export const Item = (props) => {

    return(
        <button className="article" value={props.numId}>
            <img src={props.imagen[0]} alt=""/>
            <p className="producto">{props.nombre}</p>
            <p>$ {props.precio}</p>
        </button>
    )
}