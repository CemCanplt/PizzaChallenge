import "./MainPageExtra.css";
import React from "react";
import NavBarEN from "./Mini-Component/NavBarEN";
import Kart from "./Mini-Component/Kart";

const pizzaVerileri = [
  {
    isim: "Terminal Pizza",
    puan: 4.9,
    degerlendirme: 200,
    fiyat: 60,
    url: "../../images/iteration-2-images/pictures/food-1.png",
  },
  {
    isim: "Position Absolute Acı Pizza",
    puan: 4.9,
    degerlendirme: 928,
    fiyat: 85,
    url: "../../images/iteration-2-images/pictures/food-2.png",
  },
  {
    isim: "useEffect Tavuklu Burger",
    puan: 4.9,
    degerlendirme: 462,
    fiyat: 75,
    url: "../../images/iteration-2-images/pictures/food-3.png",
  },
];

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
        <section className="en-cok-paketlenen">
          <div className="basliklar">
            <p className="en-cok-paket-metni">en çok paketlenen menüler</p>
            <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
            <NavBarEN />
            <div className="kart-flex">
              {pizzaVerileri.map((pizzaVerisi) => (
                <Kart pizzaVerisi={pizzaVerisi} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainPageExtra;
