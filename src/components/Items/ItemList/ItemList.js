import { Item } from "../Item/Item";
import { useState } from "react";
import "./ItemList.scss";

export const ItemList = () => {
  const [Articulos, setArticulos] = useState([]);

  const listadoDeProductos = async () => {
    try {
      setTimeout(() => {
        setArticulos([
          {
            id: "001",
            nombre: "Elevador de monitor (aluminio)",
            imagenes: [
              "../../../assets/images/productos/elevador aluminio.png",
              "../assets/images/productos/elevador aluminio.png",
              "../assets/images/productos/elevador aluminio.png",
              "../assets/images/productos/elevador aluminio.png",
              "../assets/images/productos/elevador aluminio.png",
              "../assets/images/productos/elevador aluminio.png",
              "../assets/images/productos/elevador aluminio.png",
              "",
            ],
            tipo: "2",
            subtipo: "",
            precio: "2849.99",
            colores: ["blanco", "negro", ""],
          },
          {
            id: "002",
            nombre: "Elevador de monitor (madera)",
            imagenes: ["../assets/images/productos/elevador madera.png", ""],
            tipo: "1",
            subtipo: "",
            precio: "3699.99",
            colores: ["marron", ""],
          },
          {
            id: "003",
            nombre: "Reposa muñecas (madera)",
            imagenes: ["../assets/images/productos/madera apoyabrazo.png", ""],
            tipo: "3",
            subtipo: "",
            precio: "1600.32",
            colores: ["marron", ""],
          },
          {
            id: "004",
            nombre: "Barra espaciadora (madera)",
            imagenes: ["../assets/images/productos/madera espacio.png", ""],
            tipo: "3",
            subtipo: "",
            precio: "700",
            colores: ["marron", ""],
          },
          {
            id: "005",
            nombre: "Kit teclas de madera",
            imagenes: ["../assets/images/productos/kit madera.png", ""],
            tipo: "2",
            subtipo: "",
            precio: "1949.49",
            colores: ["marron", ""],
          },
          {
            id: "006",
            nombre: "Kit extensiones",
            imagenes: [
              "../assets/images/productos/kit extension blanco.png",
              "",
            ],
            tipo: "3",
            subtipo: "",
            precio: "3899.49",
            colores: [
              "blanco",
              "negro",
              "verde",
              "azul",
              "rojo",
              "rosa",
              "violeta",
              "naranja",
              "amarillo",
              "",
            ],
          },
          {
            id: "007",
            nombre: "Soporte vertical de GPU",
            imagenes: ["../assets/images/productos/soporte gpu.png", ""],
            tipo: "1",
            subtipo: "",
            precio: "1800",
            colores: ["negro", "RGB", ""],
          },
          {
            id: "008",
            nombre: "Soporte horizontal de GPU",
            imagenes: [
              "../assets/images/productos/soporte gpu horizontal.png",
              "",
            ],
            tipo: "1",
            subtipo: "",
            precio: "1049.49",
            colores: [
              "blanco",
              "negro",
              "verde",
              "azul",
              "rojo",
              "rosa",
              "violeta",
              "naranja",
              "amarillo",
              "",
            ],
          },
          {
            id: "009",
            nombre: "Kit cable usb",
            imagenes: ["../assets/images/productos/usb.png", ""],
            tipo: "2",
            subtipo: "",
            precio: "1600.38",
            colores: [
              "blanco",
              "negro",
              "verde",
              "azul",
              "rojo",
              "rosa",
              "violeta",
              "naranja",
              "amarillo",
              "",
            ],
          },
          {
            id: "010",
            nombre: "Cable forrado 3.5 estereo",
            imagenes: ["../assets/images/productos/sleeved 3.5.png", ""],
            tipo: "1",
            subtipo: "",
            precio: "530",
            colores: [
              "blanco",
              "negro",
              "verde",
              "azul",
              "rojo",
              "rosa",
              "violeta",
              "naranja",
              "amarillo",
              "",
            ],
          },
          {
            id: "011",
            nombre: "Cable trenzado forrado 3.5 estereo",
            imagenes: ["../assets/images/productos/trenza jack 3,5.png", ""],
            tipo: "2",
            subtipo: "",
            precio: "659.09",
            colores: [
              "blanco",
              "negro",
              "verde",
              "azul",
              "rojo",
              "rosa",
              "violeta",
              "naranja",
              "amarillo",
              "",
            ],
          },
          {
            id: "012",
            nombre: "Kit extensiones en L",
            imagenes: ["../assets/images/productos/extension en L.png", ""],
            tipo: "2",
            subtipo: "",
            precio: "2100",
            colores: [
              "blanco",
              "negro",
              "verde",
              "azul",
              "rojo",
              "rosa",
              "violeta",
              "naranja",
              "amarillo",
              "",
            ],
          },
          {
            id: "000",
            nombre: "final",
            imagenes: ["", ""],
            tipo: "",
            subtipo: "",
            precio: "0",
            colores: [
              "blanco",
              "negro",
              "amarillo",
              "azul",
              "naranja",
              "RGB",
              "rojo",
              "rosa",
              "verde",
              "violeta",
              "marron",
              "",
            ],
          },
        ]);
      }, 2000);
    } finally {
      console.log("success");
    }
  };
  const NoProducts = () => {
    setArticulos([]);
  };
  return (
    <div id="articles">
      <button onClick={listadoDeProductos}>Ver Articulos</button>
      <button onClick={NoProducts}>No ver Articulos</button>
      {Articulos.length &&
        Articulos.map((Articulo) => (
          <Item
            numId={Articulo.id}
            imagen={Articulo.imagenes}
            nombre={Articulo.nombre}
            precio={Articulo.precio}
          />
        ))}
    </div>
  );
};
