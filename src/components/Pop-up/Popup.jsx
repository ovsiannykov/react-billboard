import "./popup.css"


function Popup () {

    function saveInfo () {

    }
    return(
        <div className="popupWrapper">
        <div className="popupBody">
            <h2>Заполните информацию</h2>

            <form onSubmit={saveInfo ()}  action="">
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Город"/>
                <button type="submite" className="popupBtn">Сохранить</button>
            </form>
            <img src="./images/cross.png" class="popupClose" alt="Close"/>
        </div>
        </div>
    );
}
export default Popup;