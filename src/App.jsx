import "./App.css";
import MainPage from "./Components/Pages/MainPage";
import SelectionScreen from "./Components/Pages/SelectionScreen";
import FinishingPage from "./Components/Pages/FinishingPage";
import { useState } from "react";

const ekPara = {
  hamurSecimi: 0,
  hamurTipi: 0,
  ekMalzeme: [],
  not: "",
  ismim: "",
  hizli: 0,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [formData, setFormData] = useState(ekPara);
  const [toplamUcret, setToplamUcret] = useState(0);
  const [ekUcret, setEkUcret] = useState(0);

  return (
    <div className="pizza-king">
      <header className="never-changing-title">
        <h1>Teknolojik Yemekler</h1>
        {/* <img src="" alt="teknoYemekLogo" /> */}
      </header>
      {currentPage === "home" && <MainPage setCurrentPage={setCurrentPage} />}
      {currentPage === "order" && (
        <SelectionScreen
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
          toplamUcret={toplamUcret}
          setToplamUcret={setToplamUcret}
          setEkUcret={setEkUcret}
          ekUcret={ekUcret}
          ekPara={ekPara}
        />
      )}
      {currentPage === "finish" && (
        <FinishingPage
          formData={formData}
          ekUcret={ekUcret}
          toplamUcret={toplamUcret}
        />
      )}
    </div>
  );
}

export default App;

/* 
    <>
      <div>
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
    </>
*/
