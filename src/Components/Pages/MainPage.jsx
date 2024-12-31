import React from "react";
import "./MainPage.css";
import Footer from "./Mini-Component/Footer";
import NavBarTR from "./Mini-Component/NavBarTR";

function MainPage({ setCurrentPage }) {
  return (
    <>
      <div className="main-page">
        <p id="firsat">fırsatı kaçırma</p>
        <div className="text-pic-gap">
          <p>
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </p>
          <button className="aciktim" onClick={() => setCurrentPage("order")}>
            ACIKTIM
          </button>
        </div>
      </div>
      {/* Öncesine dokunma */}
      <NavBarTR />
      <Footer />
    </>
  );
}

export default MainPage;
