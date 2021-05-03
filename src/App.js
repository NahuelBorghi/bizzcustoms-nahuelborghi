import logo from "./assets/img-pagina/logo.png";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartItemCount } from "./components/Items/ItemDetail/CartItemCount/CartItemCount";
import { ItemList } from "./components/Items/ItemList/ItemList";
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div id="body">
      <Header />
      <Navbar />
      <ItemListContainer greeting="casa" />
      <CartItemCount />
      <ItemList></ItemList>
      <ItemDetailContainer></ItemDetailContainer>
      {bizzLogo()}
      {footer()}
    </div>
  );
}
function footer() {
  return (
    <footer>
      <div>
        <a href="./">Sobre nosotros</a>
      </div>
      <div> Relleno </div>
      <div>
        <a href="./">Contacto</a>
      </div>
    </footer>
  );
}
function bizzLogo() {
  return (
    <div className="logo">
      <a href="./">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default App;
