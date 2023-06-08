import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const misProductos = categoria
      ? query(collection(db, "inventario"), where("categoria", "==", categoria))
      : collection(db, "inventario");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((err) => console.log(err));
  }, [categoria]);

  return (
    <>
      <h2 className="greeting">{categoria}</h2>

      <div className="productosContainer">
        <ItemList productos={productos} />
      </div>
    </>
  );
};
