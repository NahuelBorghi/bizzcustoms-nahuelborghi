import React from "react"
import carrito from '../assets/images/carro.png';
function header(){
    return(
        <div id="header">
            <div><button id="tema" type="button">Tema Oscuro</button></div>
            <div class="carrito"><a href="./views/carrito.html"><img src={carrito} alt="carrito"/></a></div>
        </div>
    );
}
export default header;