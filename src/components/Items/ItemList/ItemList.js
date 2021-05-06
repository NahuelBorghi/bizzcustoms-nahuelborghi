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
            name: "Elevador de monitor (aluminio)",
            img: "elevadoraluminio.png",
            type: "2",
            subtype: "",
            price: "2849.99",
            color: ["blanco", "negro", ""],
          },
          {
            id: "002",
            name: "Elevador de monitor (madera)",
            img: "elevadormadera.png",
            type: "1",
            subtype: "",
            price: "3699.99",
            color: ["marron", ""],
          },
          {
            id: "003",
            name: "Reposa muñecas (madera)",
            img: "madera apoyabrazo.png",
            type: "3",
            subtype: "",
            price: "1600.32",
            color: ["marron", ""],
          },
          {
            id: "004",
            name: "Barra espaciadora (madera)",
            img: "madera espacio.png",
            type: "3",
            subtype: "",
            price: "700",
            color: ["marron", ""],
          },
          {
            id: "005",
            name: "Kit teclas de madera",
            img: "kit madera.png",
            type: "2",
            subtype: "",
            price: "1949.49",
            color: ["marron", ""],
          },
          {
            id: "006",
            name: "Kit extensiones",
            img: "kit extension blanco.png",
            type: "3",
            subtype: "",
            price: "3899.49",
            color: [
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
            name: "Soporte vertical de GPU",
            img: "soporte gpu.png",
            type: "1",
            subtype: "",
            price: "1800",
            color: ["negro", "RGB", ""],
          },
          {
            id: "008",
            name: "Soporte horizontal de GPU",
            img: "soporte gpu horizontal.png",
            type: "1",
            subtype: "",
            price: "1049.49",
            color: [
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
            name: "Kit cable usb",
            img: "usb.png",
            type: "2",
            subtype: "",
            price: "1600.38",
            color: [
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
            name: "Cable forrado 3.5 estereo",
            img: "sleeved 3.5.png",
            type: "1",
            subtype: "",
            price: "530",
            color: [
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
            name: "Cable trenzado forrado 3.5 estereo",
            img: "trenza jack 3,5.png",
            type: "2",
            subtype: "",
            price: "659.09",
            color: [
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
            name: "Kit extensiones en L",
            img: "extension en L.png",
            type: "2",
            subtype: "",
            price: "2100",
            color: [
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
            article={Articulo}
          />
        ))}
    </div>
  );
};
