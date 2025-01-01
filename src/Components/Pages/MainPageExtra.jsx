import "./MainPageExtra.css";
import React from "react";
import NavBarEN from "./Mini-Component/NavBarEN";

function MainPageExtra() {
  return (
    <>
      <main>
        <section className="teklifler">
          <div className="Lezzetus">
            <h1>
              Özel
              <br />
              Lezzetus
            </h1>
            <p>Position:Absolute Acı Burger</p>
            <button>SİPARİŞ VER</button>
          </div>

          <div className="hack-npm">
            <div className="hack">
              <h3>
                Hackathlon
                <br />
                Burger Menü
              </h3>
              <button>SİPARİŞ VER</button>
            </div>

            <div className="npm">
              <h3>
                <span>Çoooook</span> hızlı
                <br />
                npm gibi burger
              </h3>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainPageExtra;
