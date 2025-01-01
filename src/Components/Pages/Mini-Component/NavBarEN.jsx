import "./NavBarEN.css"

const navButonImgUrl = "../../images/iteration-2-images/icons/";

function NavBarEN() {
  return (
    <nav className="navBarEn">
      <button>
        <img src={`${navButonImgUrl}1.svg`} alt="Kore" />
        <span>YENİ! Kore</span>
      </button>

      <button>
        <img src={`${navButonImgUrl}2.svg`} alt="Pizza" />
        <span>Pizza</span>
      </button>

      <button>
        <img src={`${navButonImgUrl}3.svg`} alt="Burger" />
        <span>Burger</span>
      </button>

      <button>
        <img src={`${navButonImgUrl}4.svg`} alt="Patetes" />
        <span>Kızartmalar</span>
      </button>

      <button>
        <img src={`${navButonImgUrl}5.svg`} alt="FastFood" />
        <span>Fast Food</span>
      </button>

      <button>
        <img src={`${navButonImgUrl}6.svg`} alt="İçecek" />
        <span>Gazlı İçecek</span>
      </button>
    </nav>
  );
}

export default NavBarEN;
