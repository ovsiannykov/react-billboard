import "./cart.css"

function Cart () {   // где пропсы на вход для текста, картинки и тд + отобразить в комопненте
    return (
        <div className="cart">
        
            <img className="cartImage" src="/golf.jpg" alt="" width={240} height={160} />
            <div className="cartText">
                <h3 className="cartName">Golf 7 GTI</h3>
                <p className="cartTtitle">Продам машину в хорошем состоянии</p>
                <button className="buyBtn">Купить</button>
            </div>
        </div>
    );
}

export default Cart;
