import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, centavos, img, stock }) => {
  return (
    <div className={`cardProducto ${stock === 0 ? "sinStock" : ""}`}>
      <div className="cardProductoImage">
        <Link to={`/item/${id}`}>
          <img src={img} alt={nombre} />
        </Link>
        {stock === 0 && <p className="textoSinStock">Sin Stock</p>}
      </div>
      <Link to={`/item/${id}`}>
        <h3>{nombre}</h3>
      </Link>
      <div className="cardPrecio">
        <h2>
          ${precio}
          <small>{centavos}</small>
        </h2>
        <p>12 Cuotas sin intereses de ${((precio * 1.6) / 12).toFixed(3)}</p>
        <Link to={`/item/${id}`} className="itembtn">
          Ver detalles
        </Link>
      </div>
      <h4>cantidad de productos: {stock}</h4>
    </div>
  );
};

export default Item;
