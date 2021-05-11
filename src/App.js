import logo from "./assets/img-pagina/logo.png";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartItemCount } from "./components/Items/ItemDetail/CartItemCount/CartItemCount";
import { Articles } from "./Pages/Articles";
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {bizzLogo()}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer></ItemListContainer>
        </Route>
        <Route exact path="/Articles">
          <Articles></Articles>
        </Route>
        <Route exact path="/articles/:id">
          <ItemDetailContainer></ItemDetailContainer>
        </Route>
        <Route exact path="/cart">
          
        </Route>
      </Switch>
      {footer()}
    </BrowserRouter>
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
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default App;
