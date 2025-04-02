import '../App.css';
export function Header(){
    return(
        <>
            <header className="header">
                <div className="header-left-block">
                <img className="city-picture" src='../img/Path.png'/>
                <p className="city font">Москва</p>
                <p className="number font">8 800 550 83 13</p>
                <p className="call-text font">Заказать звонок</p>
                </div>

                <div className="header-right-block">
                    <p className="font">Вход и регистрация</p>
                </div>
            </header>
        </>
    );
}