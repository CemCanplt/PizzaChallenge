import { useEffect, useState } from "react";
import "./SelectionScreen.css";
import Checkbox from "./Mini-Component/Checkbox.jsx";
import { useHistory } from "react-router-dom";

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

const ekPara = {
  hamurSecimi: 0,
  hamurTipi: 0,
  ekMalzeme: [],
  not: "",
};

function SelectionScreen() {
  const [counter, setCounter] = useState(1);
  const [toplamUcret, setToplamUcret] = useState(110.5);
  const [ekUcret, setEkUcret] = useState(0);
  const [formData, setFormData] = useState(ekPara);

  const history = useHistory();

  useEffect(() => {
    setEkUcret(
      formData.hamurSecimi + formData.hamurTipi + formData.ekMalzeme.length * 5
    );
  }, [formData, counter]);

  useEffect(() => {
    setToplamUcret((ekUcret + 85.5) * counter);
  }, [ekUcret, counter]);

  function handleFiyat(event) {
    const { name, value, checked } = event.target;

    if (name == "hamurSecimi" || name == "hamurTipi") {
      const ucret = Number(value);
      setFormData({ ...formData, [name]: ucret });
    }

    if (name == "ekMalzeme") {
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    }

    if (name === "not") {
      setFormData({ ...formData, [name]: value });
    }
  }

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

  function handleSubmit(e) {
    e.preventDefault();
    history.push("./siparis/basarili");
  }

  return (
    <div className="theSayfa">
      <div className="sayfa-yolu">
        <p>Anasayfa-Seçenekler-Sipariş Oluştur</p>
      </div>
      <div className="siparis-page">
        <form onSubmit={handleSubmit}>
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
                  value="0"
                  onChange={handleFiyat}
                  defaultChecked
                ></input>
                <label htmlFor="kucukPizza"> Küçük</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ortaPizza"
                  name="hamurSecimi"
                  value="10"
                  onChange={handleFiyat}
                ></input>
                <label htmlFor="ortaPizza"> Orta</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="buyukPizza"
                  name="hamurSecimi"
                  value="20"
                  onChange={handleFiyat}
                ></input>
                <label htmlFor="buyukPizza"> Büyük</label>
              </div>
            </div>
            <div className="hamur">
              <h2>Hamur Seç</h2>
              <select id="hamurTipi" name="hamurTipi" onChange={handleFiyat}>
                <option value="Hamur Seçimi" selected disabled hidden>
                  Hamur Kalınlığı
                </option>
                <option value="20">İnce Hamur</option>
                <option value="0">Orta Hamur</option>
                <option value="10">Kalın Hamur</option>
              </select>
            </div>
          </div>
          <div className="ek-malzeme">
            <h2>Ek Malzemeler</h2>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="checkbox">
              {malzemeler.map((malzeme) => {
                return (
                  <Checkbox
                    setFormData={setFormData}
                    formData={formData}
                    malzeme={malzeme}
                    key={malzeme}
                    handleFiyat={handleFiyat}
                  />
                );
              })}
            </div>
          </div>
          <div className="siparis-notu">
            <h2>Sipariş Notu</h2>
            <textarea
              name="not"
              id="not"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={formData.not}
              onChange={handleFiyat}
            ></textarea>
          </div>
          <div className="divider"></div>

          <div className="odeme-bolumu">
            <div className="adet-sayaci">
              <button name="eksi" onClick={counterHandler} type="button">
                -
              </button>
              <p>{counter}</p>
              <button name="artı" onClick={counterHandler} type="button">
                +
              </button>
            </div>
            <div className="siparis-fiyat-odeme">
              <div className="siparis-hesap">
                <h4>Sipariş Toplamı</h4>
                <div className="secimler-satiri">
                  <p>Seçimler</p>
                  <p>{ekUcret}₺</p>
                </div>
                <div className="toplam-fiyat-satiri">
                  <p>Toplam</p>
                  <p>{toplamUcret}₺</p>
                </div>
              </div>
              <div className="siparis-ver-tusu">
                <div className="gizli-adet-sayaci">
                  <button name="eksi" onClick={counterHandler} type="button">
                    -
                  </button>
                  <p>{counter}</p>
                  <button name="artı" onClick={counterHandler} type="button">
                    +
                  </button>
                </div>
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
