import React from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MainPage() {
  const history = useHistory()

  return (
    <div className="main-page">
      <div className="text-pic-gap">
        <p>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </p>
        <button
          className="aciktim"
          onClick={()=> history.push("/siparis")}
        >
          ACIKTIM
        </button>
      </div>
      <img
        src="../../images/pngegg3.png"
        alt="Büyük Pizza"
        className="big-pizza"
      />
    </div>
  );
}

export default MainPage;
