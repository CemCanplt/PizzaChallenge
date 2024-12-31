import React from "react";
import "./MainPage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MainPage() {
  const history = useHistory();

  return (
    <div className="main-page">
      <p id="firsat">fırsatı kaçırma</p>
      <div className="text-pic-gap">
        <p>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </p>
        <button className="aciktim" onClick={() => history.push("/siparis")}>
          ACIKTIM
        </button>
      </div>
    </div>
  );
}

export default MainPage;
