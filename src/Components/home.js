import React from "react";
import "./home.css";
import Moon from "../assets/moon.png";
import Nave from "../assets/nave.png";

function Home() {
  return (
    <div className="escena">
      <h1>¿QUERÉS ANDAR EN BICICLETA POR LA LUNA?</h1>
      <p>TENEMOS LAS MEJORES BICICLETAS QUE COMBATEN LA GRAVEDAD</p>
      <div className="navespace">
        <div className="moonmove">
          <img src={Moon} className="moonimg" />
        </div>
        <img src={Nave} className="naveimg" />
        <div className="fuego1"></div>
        <div className="fuego2"></div>
        <div className="fuego3"></div>
      </div>
    </div>
  );
}

export default Home;