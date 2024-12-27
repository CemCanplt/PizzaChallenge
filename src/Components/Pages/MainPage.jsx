import React from "react";

function MainPage() {
  return (
    <div className="main-page">
      <header>
        <h1>Teknolojik Yemekler</h1>
        <p>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </p>
      </header>
      <button
        className="aciktim"
        onClick={null /* sonra eklenecek handleClick */}
      >
        ACIKTIM
      </button>
    </div>
  );
}

export default MainPage;
