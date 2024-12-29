import { useState } from "react";
import "./SelectionScreen.css";
import Checkbox from "./Mini-Component/Checkbox.jsx";

const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Sucuk",
  "Ananas",
  "Kabak",
];

function SelectionScreen() {
  const [counter, setCounter] = useState(1);
  const [toplamUcret, setToplamUcret] = useState(110.5);

  function counterHandler(event) {
    const { name } = event.target;
    if (name === "eksi") {
      if (counter == 1) {
        return;
      } else {
        setCounter(counter - 1);
      }
    }
    if (name === "artı") {
      setCounter(counter + 1);
    }
  }

  return (
    <div className="theSayfa">
      <div className="sayfa-yolu">
        <p>Anasayfa-Seçenekler-Sipariş Oluştur</p>
      </div>
      <div className="siparis-page">
        <form>
          <h2>Position Absolute Pizza</h2>
          <div className="aciklama-bilgi">
            <div className="para-puan">
              <h1>85.50₺</h1>
              <div className="yildiz-skor">
                <p>4.9</p>
                <p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
                <p>(200)</p>
              </div>
            </div>
            <p>
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
          <div className="boyut-hamur">
            <div className="boyut">
              <h2>Boyut Seç</h2>
              <div>
                <input
                  type="radio"
                  id="kucukPizza"
                  name="hamurSecimi"
                  value={null}
                ></input>
                <label htmlFor="kucukPizza"> Küçük</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ortaPizza"
                  name="hamurSecimi"
                  value={null}
                ></input>
                <label htmlFor="ortaPizza"> Orta</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="buyukPizza"
                  name="hamurSecimi"
                  value={null}
                ></input>
                <label htmlFor="buyukPizza"> Büyük</label>
              </div>
            </div>
            <div className="hamur">
              <h2>Hamur Seç</h2>
              <select id="hamurTipi" name="hamurTipi">
                <option value="Hamur Seçimi" selected disabled hidden>
                  Hamur Kalınlığı
                </option>
                <option value="ince Hamur">İnce Hamur</option>
                <option value="Orta Hamur">Orta Hamur</option>
                <option value="Kalın Hamur">Kalın Hamur</option>
              </select>
            </div>
          </div>
          <div className="ek-malzeme">
            <h2>Ek Malzemeler</h2>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="checkbox">
              {malzemeler.map((malzeme) => {
                return <Checkbox malzeme={malzeme} key={malzeme} />;
              })}
            </div>
          </div>
          <div className="siparis-notu">
            <h2>Sipariş Notu</h2>
            <textarea
              name="not"
              id="not"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            ></textarea>
          </div>
          <div className="divider"></div>
          <div className="counter-siparis">
            <div className="counter">
              <button name="eksi" onClick={counterHandler} type="button">
                -
              </button>
              <p>{counter}</p>
              <button name="artı" onClick={counterHandler} type="button">
                +
              </button>
            </div>

            <div className="siparis-hesap-button">
              <div className="siparis-hesap">
                <h4>Sipariş Toplamı</h4>
                <div className="secimler">
                  <p>Seçimler</p>
                  <p>25.00₺</p>
                </div>
                <div className="toplam">
                  <p>Toplam</p>
                  <p>{toplamUcret}₺</p>
                </div>
              </div>
              <div className="siparis-tusu">
                <button>SİPARİŞ VER</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectionScreen;
