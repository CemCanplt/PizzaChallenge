import React from "react"

function MainPage() {
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
          onClick={null /* sonra eklenecek handleClick */}
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
