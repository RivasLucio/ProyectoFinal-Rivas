import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>no hay productos</h2>
        <Link to="/"> ver productos</Link>
      </>
    );
  }
  return (
    <div className="carrito">
      {carrito.map((producto) => (
        <div className="carritoCard">
          {" "}
          <CartItem key={producto.id} {...producto} />{" "}
        </div>
      ))}
      <div className="compra">
        <button className="vaciarBtn" onClick={() => vaciarCarrito()}>
          Vaciar carrito
        </button>
        <div className="compraTotal">
          <h3>cantidad total: {cantidadTotal}</h3>
          <h3>total : ${total.toFixed(3)}</h3>
        </div>
        <Link className="finalizarBtn" to="/checkout">
          <button >Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
