import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/config";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", id);

    getDoc(nuevoDoc)
      .then((res) => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data };
        setProducto(nuevoProducto);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};
