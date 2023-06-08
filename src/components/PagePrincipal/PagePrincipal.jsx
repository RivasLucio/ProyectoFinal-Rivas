import "./PagePrincipal.css";
import pcBasic from "../../assets/img/pcbasic.png";
import pcMedia from "../../assets/img/pcmedia.png";
import pcAlta from "../../assets/img/pcalta.png";
import { FondoPrincipal } from "../FondoPrincipal/FondoPrincipal";

export const PagePrincipal = () => {
  return (
    <>
      <div className="pagePrincipal">
        <FondoPrincipal
          textoInterfaz1="Upgrade"
          textoInterfaz2="your"
          textoInterfaz3="setup"
        />
        <h2>Bienvenido a Game Over</h2>
        <div className="pagePrincipalPcContainer">
          <img src={pcBasic} alt="" className="pagePrincipalPc" />
          <img src={pcMedia} alt="" className="pagePrincipalPc" />
          <img src={pcAlta} alt="" className="pagePrincipalPc" />
        </div>
      </div>
    </>
  );
};
