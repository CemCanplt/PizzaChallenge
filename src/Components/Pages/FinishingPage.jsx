import "./FinishingPage.css";

function FinishingPage({ formData, ekUcret, toplamUcret }) {
  const { ekMalzeme, hamurSecimi, hamurTipi } = formData;

  const hamurumunTipi =
    hamurTipi == 0
      ? "Orta Hamur"
      : hamurTipi == 10
      ? "Kalın Hamur"
      : "İnce Hamur";
  const hamurBoyutum = hamurSecimi == 0 ? "S" : hamurSecimi == 10 ? "M" : "L";

  return (
    <section className="finishing-page">
      <div className="tebrik-ekrani">
        <p>lezzetin yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
      </div>
      <div className="finishing-page-divider"></div>
      <p>Position: Absolute Acı Pizza</p>
      <div className="detaylar">
        <p>
          <span>Boyut:</span> {hamurBoyutum}
        </p>
        <p>
          <span>Hamur:</span> {hamurumunTipi}
        </p>
        <p>
          <span>Ek Malzemeler:</span> {ekMalzeme.join(", ")}
        </p>
      </div>
      {/* Sipariş özeti */}
      <div className="siparis-fiyat-odemeFP">
        <div className="siparis-hesapFP">
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
      </div>
    </section>
  );
}

export default FinishingPage;
