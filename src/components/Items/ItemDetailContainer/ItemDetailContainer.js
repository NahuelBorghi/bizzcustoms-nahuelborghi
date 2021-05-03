import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";

export const ItemDetailContainer = () => {
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    const Detail = async () => {
      try {
        setTimeout(() => {
          setDetails({
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
          });
        }, 2000);
      } finally {
        console.log("success");
      }
    };
    Detail();
  }, []);

  return (
    <div id="Detail">
      <ItemDetail nombre={Details.nombre} precio={Details.precio}></ItemDetail>
    </div>
  );
};
