import "./popup.css"


function Popup () {
    return(
        <div className="popupWrapper">
        <div className="popupBody">
            <p>Заполните информацию</p>
            <form action="">
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="city" />
                <button className="popupBtn">ОТПРАВИТЬ</button>
            </form>
        </div>
        </div>
    );
}
export default Popup;