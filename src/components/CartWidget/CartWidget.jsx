import { useContext } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";

export const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div className="navbarCarrito">
      <Link to="/cart" className="navbarCarrito">
        <i className="bi bi-cart4"></i>
        {cantidadTotal > 0 ? <span>{cantidadTotal}</span> : <span>0</span>}
      </Link>
    </div>
  );
};
