import React from "react"
import {CartWidget} from '../Header/CartWidget/CartWidget'
function Header(){
    return(
        <div id="header">
            <div><button id="tema" type="button">Tema Oscuro</button></div>
            <div className="carrito"><CartWidget/></div>
        </div>
    );
}
export default Header;