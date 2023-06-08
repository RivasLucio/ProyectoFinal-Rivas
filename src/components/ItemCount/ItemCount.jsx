import { useState } from "react";
import "./ItemCount.css";

export function ItemCount({ stock, inicial, funcionAgregar }) {
  const [contador, setContador] = useState(inicial);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const reducirContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };
  return (
    <>
      <div className="contadorContainer">
        <button className="contadorIzq" onClick={reducirContador}>
          -
        </button>
        <strong> {contador} </strong>
        <button className="contadorDer" onClick={aumentarContador}>
          +
        </button>
      </div>
      <button onClick={() => funcionAgregar(contador)}>
        Agregar al Carrito
      </button>
    </>
  );
}
