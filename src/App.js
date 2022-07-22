import React from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Popup from "./components/Pop-up/Popup";

function App() {
const [popupOpened, setPopupOpened] = React.useState(false);
  return (
    <div className="App">
    {popupOpened ? <Popup closePopup = {() => setPopupOpened(false)}/> : null}

      <div className="wrapper">
        
        <header>
          
          <div>
            <h2 className="logo">React-BillBoard</h2>
          </div>
          <div className="headerRight">
            <button onClick={() => setPopupOpened(true)} className="orderBtn">Заказать звонок</button>
            <a href="#" className="headerIcon">
              <img src="/cart.png" alt="card" width={30} height={30} />
            </a>
            <a href="#" className="headerIcon">
              <img src="/profile.png" alt="card" width={30} height={30} />
            </a>
            <span>Мой пррофиль</span>
          </div>
        </header>
        <div className="content">
          <h1>Обьявления</h1>
          <div className="main">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
