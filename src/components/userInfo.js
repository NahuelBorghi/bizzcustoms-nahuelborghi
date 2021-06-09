import { useContext } from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom"

export const UserInfo = () => {
  const cart = useContext(CartContext);
  const readInfo = (e) => {
    e.preventDefault();
    
    let cp = document.userInfo.cp.value
      ? (document.userInfo.cp.removeAttribute("style"),
        document.userInfo.cp.value)
      : document.userInfo.cp.setAttribute("style", "border:2px solid red");

    let prov = document.userInfo.prov.value
    ? (document.userInfo.prov.removeAttribute("style"),
      document.userInfo.prov.value)
    : document.userInfo.prov.setAttribute("style", "border:2px solid red");

    let city = document.userInfo.city.value
    ? (document.userInfo.city.removeAttribute("style"),
      document.userInfo.city.value)
    : document.userInfo.city.setAttribute("style", "border:2px solid red");

    let street = document.userInfo.street.value
    ? (document.userInfo.street.removeAttribute("style"),
      document.userInfo.street.value)
    : document.userInfo.street.setAttribute("style", "border:2px solid red");

    let hNum = document.userInfo.address.value
    ? (document.userInfo.address.removeAttribute("style"),
      document.userInfo.address.value)
    : document.userInfo.address.setAttribute("style", "border:2px solid red");

    let floor = document.userInfo.floor.value
    ? (document.userInfo.floor.removeAttribute("style"),
      document.userInfo.floor.value)
    : 0;

    let dpto = document.userInfo.dpto.value
    ? (document.userInfo.dpto.removeAttribute("style"),
      document.userInfo.dpto.value)
    : 0;

    let email = document.userInfo.email.value
    ? (document.userInfo.email.removeAttribute("style"),
      document.userInfo.email.value)
    : document.userInfo.email.setAttribute("style", "border:2px solid red");

    let name = document.userInfo.name.value
    ? (document.userInfo.name.removeAttribute("style"),
      document.userInfo.name.value)
    : document.userInfo.name.setAttribute("style", "border:2px solid red");

    let phone = document.userInfo.phone.value
    ? (document.userInfo.phone.removeAttribute("style"),
      document.userInfo.phone.value)
    : document.userInfo.phone.setAttribute("style", "border:2px solid red");
    
    if(cp && prov && city && street && hNum && email && name && phone){
        const user = {
            address:{
                apartment: dpto,
                city: city,
                floor: floor,
                houseNumber: hNum,
                postalCode: cp,
                province: prov,
                streetName: street
            },
            email: email,
            fullName: name,
            phone: phone
        }
        cart.SetUserInfo(user)
        document.getElementById("next").removeAttribute("style")
    }else{
        document.getElementById("next").removeAttribute("style")
        document.getElementById("next").setAttribute("style","display:none")
    }
    
  };

  return (
    <>
      <form name="userInfo">
            <h3>Direccion</h3>
                <input type="number" name="cp" placeholder="codigo postal"></input>
                <input type="text" name="prov" placeholder="provincia"></input>
                <input type="text" name="city" placeholder="ciudad"></input>
                <input type="text" name="street" placeholder="calle"></input>
                <input type="number" name="address" placeholder="altura"></input>
                <input type="number" name="floor" placeholder="piso"></input>
                <input type="text" name="dpto" placeholder="departamento"></input>
            <p>Informacion de contacto</p>
            <input type="email" name="email" placeholder="mail"></input>
            <input type="text" name="name" placeholder="nombre completo"></input>
            <input type="tel" name="phone" placeholder="telefono"></input>
        <button onClick={(e) => {readInfo(e);}}>guardar</button>
        <Link exact to="/cart"><button id="next" style={{display:"none"}} onClick={() => {cart.orderGenerator();}}>Continuar</button></Link>
      </form>
    </>
  );
};
