import "./Kart.css";

function Kart({ pizzaVerisi }) {
  const { puan, isim, degerlendirme, fiyat, url } = pizzaVerisi;

  return (
    <div className="kare-kart">
      <img src={url} alt="" />
      <h3>{isim}</h3>
      <div className="notlandirma">
        <p>{puan}</p>
        <p>({degerlendirme})</p>
        <p className="kalin-para-metni">{fiyat}₺</p>
      </div>
    </div>
  );
}

export default Kart;
