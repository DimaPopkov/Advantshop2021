import "../App.css";

export function Footer(){
    return (
        <>
            <div style={{ width: "100%", marginTop: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "100%", height: "147px", backgroundColor: "#2D9CEE", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", columnGap: "24px" }}>
                        <p className="font18" style={{ color: "#FFFFFF", fontFamily: "Rubik-Light" }}> Подписка на новости </p>
                        <div style={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
                            <input className="font14" placeholder="Ваш e-mail" style={{ width: "381px", height: "38px", border: "0", borderRadius: "4px", paddingLeft: "17px" }} />
                            <button className="font14" style={{ width: "129px", height: "40px", border: "0", padding: "0", borderRadius: "4px", backgroundColor: "#00186A", color: "white", lineHeight: "0" }}> Подписаться </button>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "1200px", height: "578px" }}>
                    <div style={{ display: "flex", flexDirection: "row", marginTop: "85px" }}>
                        <div style={{ display: "flex" }}>
                            <div className="font14" style={{ width: "168px" }}>
                                <p style={{ color: "#C8C7CC" }}> Каталог </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Телефоны</p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Техника </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Одежда/обувь</p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Детские товары</p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Цветы</p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Еда/напитки</p>
                            </div>

                            <div className="font14" style={{ width: "168px" }}>
                                <p style={{ color: "#C8C7CC" }}> Информация </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> О магазине</p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Бренды </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Доставка и оплата </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Блог </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Бонусная программа</p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Контакты</p>
                            </div>
                            <div className="font14" style={{ width: "168px" }}>
                                <p style={{ color: "#C8C7CC" }}> Личный кабинет </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Вход </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Регистрация </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Забыли пароль? </p>
                            </div>
                            <div className="font14" style={{ width: "168px" }}>
                                <p style={{ color: "#C8C7CC" }}> Мы в социальных сетях </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Вконтакте </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Фейсбук </p>
                                <p style={{ color: "#8A8A8F", marginTop: "18px" }}> Твиттер </p>
                            </div>
                        </div>
                        <div style={{ marginLeft: "121px" }}>
                            <img style={{ marginTop: "8px" }} src="./img/Group 28.png" />
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", marginTop: "123px", height: "31px", alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                        <p className="font14" style={{ color: "#C8C7CC", lineHeight: "0" }}> © 2020 AdvantShop </p>

                        <img src="./img/Group 5.png" />

                        <div className="font14" style={{ display: "flex", flexDirection: "row", color: "#2D9CEE", justifyContent: "center", lineHeight: "0", columnGap: "18px" }}>
                            <p style={{ height: "100%" }}> Лицензионное соглашение </p>
                            <p style={{ height: "100%" }}> Политика конфиденциальности </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}