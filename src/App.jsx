import "./App.css";
import MainPage from "./Components/Pages/MainPage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import SelectionScreen from "./Components/Pages/SelectionScreen";
import FinishingPage from "./Components/Pages/FinishingPage";

function App() {
  return (
    <div className="pizza-king">
      <header className="never-changing-title">
        <h1>Teknolojik Yemekler</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/siparis">
          <SelectionScreen />
        </Route>
        <Route path="/siparis/basarili">
          <FinishingPage />
        </Route>
      </Switch>
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
