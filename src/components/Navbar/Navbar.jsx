import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <div className="navbarContainer">
        <div className="navbar">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <input type="text" placeholder="¿Que estas buscando?" />
          <div className="navbarUser">
            <i className="bi bi-person-fill"></i>
            <p>Usuario</p>
          </div>
          <CartWidget />
        </div>
        <hr />
        <div className="navbarUnder">
          <ul className="navbarUnderCategorias">
            <li>
              <NavLink to={`/categoria/placas de video`}>
                Placas de video
              </NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/procesadores`}>Procesadores</NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/gabinetes`}>Gabinete</NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/memoria ram`}>Memoria ram</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
