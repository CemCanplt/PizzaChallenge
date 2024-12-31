import "./Footer.css";

const footerIconYolu = "../../images/iteration-2-images/footer/icons/icon-";
const footerinstagramYolu = "../../images/iteration-2-images/footer/insta/li-";

function Footer() {
  return (
    <>
      <footer>
        <div className="ÜstBar">
          <div className="TekYemek-HotMenu">
            <div className="Logo-iletisim">
              <div className="Logo">
                <img
                  src="../../images/iteration-2-images/footer/logo-footer.svg"
                  alt="teknolojik yemek"
                />
              </div>
              <div className="iletisim">
                <div className="konum footerI">
                  <img src={footerIconYolu + "1" + ".png"} alt="konumLogosu" />
                  <p>341 Londonderry Road, İstanbul Türkiye</p>
                </div>
                <div className="email footerI">
                  <img src={footerIconYolu + "2" + ".png"} alt="mailLogosu" />
                  <p>aciktim@teknolojikyemekler.com</p>
                </div>
                <div className="telefon footerI">
                  <img
                    src={footerIconYolu + "3" + ".png"}
                    alt="telefonLogosu"
                  />
                  <p>+90 216 123 45 67</p>
                </div>
              </div>
            </div>
            <div className="HotMenu">
              <h4>Hot Menu</h4>
              <p>
                Terminal Pizza <br />
                5 Kişilik Hackathlon Pizza <br />
                useEffect Tavuklu Pizza <br />
                Beyaz Console Frosty <br />
                Testler Geçti Mutlu Burger <br />
                Position Absolute Acı Burger
              </p>
            </div>
          </div>
          <div className="instagram">
            <h4>Instagram</h4>
            <div className="footerResimler">
              <ul>
                <li>
                  <img
                    src={footerinstagramYolu + "0" + ".png"}
                    alt="konumLogosu"
                  />
                </li>
                <li>
                  <img
                    src={footerinstagramYolu + "1" + ".png"}
                    alt="konumLogosu"
                  />
                </li>
                <li>
                  <img
                    src={footerinstagramYolu + "2" + ".png"}
                    alt="konumLogosu"
                  />
                </li>
                <li>
                  <img
                    src={footerinstagramYolu + "3" + ".png"}
                    alt="konumLogosu"
                  />
                </li>
                <li>
                  <img
                    src={footerinstagramYolu + "4" + ".png"}
                    alt="konumLogosu"
                  />
                </li>
                <li>
                  <img
                    src={footerinstagramYolu + "5" + ".png"}
                    alt="konumLogosu"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Footerdivider"></div>
        <div className="AltBar">
          <p>Teknolojik Yemekler</p>
          <i class="fab fa-twitter"></i>
        </div>
      </footer>
    </>
  );
}

export default Footer;
