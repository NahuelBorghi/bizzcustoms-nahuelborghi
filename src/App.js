import logo from './assets/img-pagina/logo.png';
import './App.css';
import React from "react"
import Navbar from "./components/navbar"
import Header from "./components/header"
function App() {
  return (
        <div id="body">
        <Header/>
        <Navbar/>
        {bizzLogo()}
        {footer()}
        </div>
  );
}
function footer(){
    return(
        <div id="footer">
            <div><a href="./">Sobre nosotros</a></div>
            <div> Relleno </div>
            <div><a href="./">Contacto</a></div>
        </div>
    );
}
function bizzLogo(){
    return(
        <div class="logo"><a href="./"><img src={logo} alt="logo"/></a></div>
    );
}

export default App;
