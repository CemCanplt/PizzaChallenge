import { useEffect, useState } from "react";
import "./SelectionScreen.css";
import Checkbox from "./Mini-Component/Checkbox.jsx";
import Footer from "./Mini-Component/Footer.jsx";
import axios from "axios";

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

const startingErrors = {
  hamurTipi: true,
  ismim: false,
};

function SelectionScreen({
  setCurrentPage,
  setToplamUcret,
  toplamUcret,
  setFormData,
  formData,
  setEkUcret,
  ekUcret,
  ekPara,
}) {
  const [counter, setCounter] = useState(1);
  const [errors, setErrors] = useState(startingErrors);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Buraya valid şartını yazacağım

  useEffect(() => {
    const hatalarinOzeti = Object.values(errors);
    const varMi = hatalarinOzeti.includes(true) || !Boolean(formData.ismim);
    setIsValid(!varMi);
  }, [errors]);

  useEffect(() => {
    const mi = formData.ekMalzeme.length >= 10;
    setIsDisabled(mi);
  }, [formData.ekMalzeme]);

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
      if (name == "hamurTipi") {
        if (value === "Hamur Seçimi") {
          setErrors({ ...errors, [name]: true });
        } else {
          setErrors({ ...errors, [name]: false });
        }
      }
    }

    if (name == "ekMalzeme") {
      if (checked && formData.ekMalzeme.length < 10) {
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

    if (name === "ismim") {
      if (value.length >= 3) {
        setErrors({ ...errors, [name]: false });
        setFormData({ ...formData, [name]: value });
      } else {
        setErrors({ ...errors, [name]: true });
        setFormData({ ...formData, [name]: value });
      }
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

    if (!isValid) {
      return;
    }

    axios
      .post("https://reqres.in/api/pizza ", formData)
      .then((res) => {
        return console.log(res.data);
      })
      .catch((error) => console.log(error));

    setFormData(ekPara);
    setCurrentPage("finish");
  }

  return (
    <>
      <div className="theSayfa">
        {/* <div className="sayfa-yolu">
          <p>Anasayfa-Seçenekler-Sipariş Oluştur</p>
        </div> */}
        <div className="siparis-page">
          <form onSubmit={handleSubmit}>
            <div className="krema-arkaplan">
              <img
                src="../images/iteration-2-images/pictures/form-banner.png"
                alt="form-banner"
              />
              <p className="sayfa-yolu">
                Anasayfa - Seçenekler&nbsp;-&nbsp; <span>Sipariş Oluştur</span>
              </p>
              <h2>Position Absolute Acı Pizza</h2>
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
                  Frontend Dev olarak hala position:absolute kullanıyorsan bu
                  çok acı pizza tam sana göre. Pizza, domates, peynir ve
                  genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
                  geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta
                  pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday
                  bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
                  Küçük bir pizzaya bazen pizzetta denir.
                </p>
              </div>
            </div>
            <div className="kremasiz-arkaplan">
              <div className="boyut-hamur">
                <div className="boyut">
                  <h2>Boyut Seç</h2>
                  <div className="boyut-sec">
                    <div className="label-flex">
                      <input
                        type="radio"
                        id="kucukPizza"
                        name="hamurSecimi"
                        value="0"
                        onChange={handleFiyat}
                        defaultChecked
                      ></input>
                      <label htmlFor="kucukPizza">S</label>
                    </div>
                    <div className="label-flex">
                      <input
                        type="radio"
                        id="ortaPizza"
                        name="hamurSecimi"
                        value="10"
                        onChange={handleFiyat}
                      ></input>
                      <label htmlFor="ortaPizza">M</label>
                    </div>
                    <div className="label-flex">
                      <input
                        type="radio"
                        id="buyukPizza"
                        name="hamurSecimi"
                        value="20"
                        onChange={handleFiyat}
                      ></input>
                      <label htmlFor="buyukPizza">L</label>
                    </div>
                  </div>
                </div>
                <div className="hamur">
                  <h2>Hamur Seç</h2>
                  <select
                    id="hamurTipi"
                    name="hamurTipi"
                    onChange={handleFiyat}
                  >
                    <option value="Hamur Seçimi" selected disabled hidden>
                      -Hamur Kalınlığı Seç-
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
                        isDisabled={isDisabled}
                        checked={formData.ekMalzeme.includes(malzeme)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="isminiz">
                <label htmlFor="ismim">
                  <h2>İsminiz</h2>
                </label>
                <input
                  type="text"
                  name="ismim"
                  id="ismim"
                  onChange={handleFiyat}
                  value={formData.ismim}
                />
                {errors.ismim && (
                  <p className="uyari-ad">İsminiz 3 karakterden kısa olamaz.</p>
                )}
              </div>
              <div className="siparis-notu">
                <label htmlFor="not">
                  <h2>Sipariş Notu</h2>
                </label>
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
                    <div className="row">
                      <span>Seçimler</span>
                      <span>{ekUcret}₺</span>
                    </div>
                    <div className="row-total">
                      <span>Toplam</span>
                      <span>{toplamUcret}₺</span>
                    </div>
                  </div>
                  <div className="siparis-ver-tusu">
                    <div className="gizli-adet-sayaci">
                      <button
                        name="eksi"
                        onClick={counterHandler}
                        type="button"
                      >
                        -
                      </button>
                      <p>{counter}</p>
                      <button
                        name="artı"
                        onClick={counterHandler}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => setCurrentPage("finish")}
                      disabled={!isValid}
                      className="siparis-ver-asil"
                    >
                      SİPARİŞ VER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SelectionScreen;
