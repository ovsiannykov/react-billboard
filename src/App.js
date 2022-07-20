import "./App.css";
import Cart from "../src/components/Cart";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <div>
            <h2 className="logo">React-BillBoard</h2>
          </div>
          <div className="headerRight">
            <button className="orderBtn">Добавить обьявление</button>
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
