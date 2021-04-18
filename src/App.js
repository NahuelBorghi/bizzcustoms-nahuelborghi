import logo from './assets/img-pagina/logo.png';
import carrito from './assets/images/carro.png';
import './App.css';

function App() {
  return (
      <div id="body">
        <div id="header">
            <div><button id="tema" type="button">Tema Oscuro</button></div>
            <div class="carrito"><a href="./views/carrito.html"><img src={carrito} alt="carrito"/></a></div>
        </div>
        <div class="logo"><a href="./"><img src={logo} alt="logo"/></a></div>
        <div id="nav">
            <ul>
                <li><a href="./">Productos</a></li>
                <li><a href="./">Compatibilidad</a></li>
                <li><a href="./">Calcular Watts</a></li>
                <li><a href="./">Contacto</a></li>
            </ul>
            <form id="search" action="" method="">
                <input type="search" placeholder="Buscar..." name="buscar" id="buscar"/>
            </form>
        </div>
        <div id="footer">
            <div><a href="./views/sobre-nosotros.html">Sobre nosotros</a></div>
            <div> Relleno </div>
            <div><a href="./views/contacto.html">Contacto</a></div>
        </div>
    </div>
  );
}

export default App;
