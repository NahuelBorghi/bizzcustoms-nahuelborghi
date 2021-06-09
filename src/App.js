import logo from "./assets/img-pagina/logo.png";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import { ItemListContainer } from "./components/ItemListContainer";
import { Articles } from "./Pages/Articles";
import { UserInfo } from "./components/userInfo";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/cartContext";
import { CartContainer } from "./components/Cart";
import { Finish } from "./components/Finish";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        {bizzLogo()}
        <Navbar />
        <Switch>

          <Route exact path="/">
            <ItemListContainer/>
          </Route>

          <Route path="/category/:type?/:color?">
            <Articles/>
          </Route>

          <Route exact path="/articles/:id">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/cart">
            <CartContainer/>
          </Route>

          <Route exact path="/order/:orderId">
            <Finish/>
          </Route>

          <Route exact path="/userInfo">
            <UserInfo/>
          </Route>

        </Switch>
        {footer()}
      </CartProvider>
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
