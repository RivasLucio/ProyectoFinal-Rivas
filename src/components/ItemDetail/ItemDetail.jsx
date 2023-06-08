import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ precio, nombre, img, id, centavos, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
  };
  return (
    <div className="detailContenedor">
      <div className="itemDetail">
        <div className="itemDetailImg">
          <h2>{nombre}</h2>
          <img src={img} alt={nombre} />
        </div>

        <div className="itemDetailCompra">
          <div className="itemDetailPrecio">
            <h2>
              ${precio} <small>{centavos}</small>
            </h2>
            <h3>
              Precio especial<i className="bi bi-exclamation-circle"></i>
            </h3>
            <h4>PRECIO LISTA: ${(precio * 1.6).toFixed(3)}</h4>
            <h4>Cantidad disponible: {stock}</h4>
            {stock > 0 ? (
              agregarCantidad > 0 ? (
                <Link to="/cart"> Terminar Compra</Link>
              ) : (
                <ItemCount
                  stock={stock}
                  inicial={1}
                  funcionAgregar={manejadorCantidad}
                />
              )
            ) : (
              <h4 className="sinStock">
                Sin disponibilidad de producto, vuelva pronto
              </h4>
            )}
            <h4>
              12 cuotas sin intereseses de ${((precio * 1.6) / 12).toFixed(3)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
