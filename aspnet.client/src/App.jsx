import './App.css';
import { Header } from './components/Header';
import { Finder } from './components/Finder';
import { CategoriesList } from './components/CategoriesList';
import { Swiper } from './components/Swiper';
import { NewItemsBlock } from './components/NewItemsBlock';
import { HitsProdBlock } from './components/HitsProdBlock';
import { Footer } from './components/Footer';
import { PopularCategoriesList } from './components/PopularCategoriesList';

export function App() 
{
  return (
    <>
    <main className ="body">   
        <Header />
        <div className="main">
            <div className="main-block">
                      <div className="main-left-block" style={{ justifyContent: "center" }}>
                          <img src="./img/advantshop.png" width="202.3px" height="21.66px"/>
                </div>
                <div className="main-right-block">
                    <div className="main-right-block-underheader">
                        <Finder />

                        <div style={{ display: "flex", flexDirection: "row", width: "187px", height: "38px", columnGap: "10px", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: "20px" }} >
                                <img className="main-poisk-other-buttons" src="./img/3.png" width="24px" height="24px" />
                                <img className="main-poisk-other-buttons" src="./img/сравнение.png" width="24px" height="24px" />
                                <img className="main-poisk-other-buttons" src="./img/корзина 2.png" width="24px" height="24px" />
                            </div>
                           
                            <p style={{ marginLeft: "10px", color: "#2D9CEE" }} className="font16"> Корзина </p>
                        </div>             
                    </div>
                </div>
            </div>

            <div className="main-block second-block">
                <div className="main-left-block">
                    <div className="catalog-button">
                        <img className="catalog-button-icon" src="./img/бургер.png" width="24px" height="24px" />

                        <p className="catalog-text white-font">Каталог товаров</p>
                    </div>
                </div>

                <div className="main-right-block">
                    <div className="catalog-button other">
                        
                        <div className="catalog-button-buttons" style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "row" }} onClick={ Burger }>
                                <p className="white-font"> О магазине </p>
                                <img className="" src="./img/выпадайка2.png" style={{ rotate: "90deg", width: "24px", height: "24px" }} />
                            </div>

                            <div className="Burger">
                                <li className="font14 white-font burger-list" style={{ color: "#2D9CEE" }}>Возможности</li> <div style={{ height:"1px", width: "100%", backgroundColor: "#EFEFF4" }} />
                                <li className="font14 white-font burger-list" style={{ color: "#2D9CEE" }}>    Цены   </li> <div style={{ height: "1px", width: "100%", backgroundColor: "#EFEFF4" }} />
                                <li className="font14 white-font burger-list" style={{ color: "#2D9CEE" }}>  Партнеры </li> <div style={{ height: "1px", width: "100%", backgroundColor: "#EFEFF4" }} />
                                <li className="font14 white-font burger-list" style={{ color: "#2D9CEE" }}>  Шаблоны  </li> <div style={{ height: "1px", width: "100%", backgroundColor: "#EFEFF4" }} />
                                <li className="font14 white-font burger-list" style={{ color: "#2D9CEE" }}>   Модули  </li> <div style={{ height: "1px", width: "100%", backgroundColor: "#EFEFF4" }} />
                                <li className="font14 white-font burger-list" style={{ color: "#2D9CEE" }}>   Услуги  </li> <div style={{ height: "1px", width: "100%", backgroundColor: "#EFEFF4" }} />
                                <li className="font14 white-font burger-list" style={{ color: "#2D9CEE" }}> Интеграции</li> <div style={{ height: "0", width: "100%", backgroundColor: "#EFEFF4" }} />
                            </div>
                        </div>

                        <div className="catalog-button-buttons">
                            <p className="white-font">Скидки</p>
                        </div>
                        <div className="catalog-button-buttons">
                            <p className="white-font">Доставка и оплата</p>
                        </div>
                        <div className="catalog-button-buttons">
                            <p className="white-font">Услуги</p>
                        </div>
                        <div className="catalog-button-buttons">
                            <p className="white-font">Акции</p>
                        </div>
                        <div className="catalog-button-buttons">
                            <p className="white-font">Блог</p>
                        </div>
                        <div className="catalog-button-buttons">
                            <p className="white-font">Контакты</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "main-block second-block2">
                <div className="main-left-block list-block">
                    <li className="categories-list">
                        <CategoriesList />
                    </li>

                    <div className="categories-list-shadow"></div>
                </div>

                <div className="main-right-block swiper-block">
                    <Swiper />
                </div>

                <button className="swiper-button white-font">Посмотреть каталог</button>
            </div>

            
            <div className = "main-block second-block2">
                <div className = "main-left-block" style={{ flexDirection: "column" }}>
                    <p className = "font align-left" style={{ fontSize: "24px", lineHeight: "31.2px", color: "#000000", margin: "0", textAlign: "left", width: "100%"}}>Статьи</p>

                    <div className = "main-left-block" style={{ display: "flex", flexDirection: "column", marginTop: "20px", }}>
                        <p className = "font" style = {{color: "#000000", margin: "0", fontSize: "14px",}}>Меган Фокс в апрельском номере журнала Jalouse</p>
                        <p className = "font" style = {{color: "#8A8A8F", margin: "0", fontSize: "12px", width: "100%", lineHeight: "18px",}}>03 апреля 2015</p>
                        <p className = "font" style = {{color: "#000000", margin: "0", fontSize: "14px", marginTop: "16px" }}>Состоялся показ Armani Prive на Неделе высокой моды в Париже</p>
                        <p className = "font" style = {{color: "#8A8A8F", margin: "0", fontSize: "12px",width: "100%", lineHeight: "18px",}}>11 марта 2015</p>

                        <p className = "font" style = {{color: "#000000", margin: "0", fontSize: "14px", marginTop: "16px", width: "100%",}}> Облачные перспективы Windows-8</p>
                        <p className = "font" style = {{color: "#8A8A8F", margin: "0", fontSize: "12px", width: "100%", lineHeight: "18px",}}>11 февраля 2015</p>

                        <p className = "font" style = {{color: "#8A8A8F", margin: "0", fontSize: "12px", width: "100%", marginTop: "20px", lineHeight: "18px",}}>Все новости</p>
                    </div>

                    <div style={{ height: "199px", marginTop: "40px", backgroundColor: "#F9F9F9", border: "0", borderRadius: "4px", paddingLeft: "32px" }}>
                        <p className="font" style = {{ width: "107px", color: "#000000", marginTop: "28px" }}>
                            Проверить статус заказа
                        </p>

                        <input className = "font" style={{ width: "200px", height: "40px", border: "0", marginTop: "9px", fontSize: "14px"}} placeholder = "Введите номер заказа" />

                        <button className = "button font" style={{ color: "white", fontSize: "14px", marginTop: "8px" }}> Проверить </button>
                    </div>

                    <div style = {{ marginTop: "40px", width: "100%", height: "283px" }}>
                        <p className = "font" style={{ fontSize: "24px", lineHeight: "31.2px", color: "#000000" }}>Опрос</p>
                        <p className = "font" style={{ fontSize: "14px", lineHeight: "22.4px", color: "#000000" }}>Как вам новый дизайн?</p>

                        <div style={{ display: "flex", marginTop: "29px" }}>
                            <input className="input1" type="text" /> <p className="font" style={{ fontSize: "14px", marginLeft: "8px", paddingTop: "2px" }}>Очень удобно!</p>
                        </div>
                        <div style={{ display: "flex", marginTop: "21px" }}>
                            <input className="input1" type="text" /> <p className="font" style={{ fontSize: "14px", marginLeft: "8px", paddingTop: "2px", width: "180px" }}>Не пользуюсь, хватает одной темы</p>
                        </div>
                        <div style={{ display: "flex", marginTop: "21px" }}>
                            <input className="input1" type="text" /> <p className="font" style={{ fontSize: "14px", marginLeft: "8px", paddingTop: "2px" }}>Что такое трансформер?</p>
                        </div>

                        <button className = "button font" style={{ color: "white", fontSize: "14px", marginTop: "29px", lineHeight: "0" }}>Голосовать</button>
                    </div>                    
                </div>

                <div className="main-right-block" style={{ display: "flex", flexDirection: "column", justifyContent: "left" }}>
                    <div className="main-right-block" style={{ display: "flex", height: "190px", backgroundColor: "#F9F9F9", border: "0", borderRadius: "4px" }}>
                        <div style = {{ display: "flex", marginLeft: "70px", width: "740px", height: "109px", columnGap: "54px" }}>
                            <div>
                                <img src="./img/proc.png" style={{ width: "34px", height: "34px", marginTop: "6px" }} />
                                <p className = "font" style = {{fontSize: "14px", width: "150px", lineHeight: "18.2px", marginBlockStart: "0", marginBlockEnd: "0", marginTop: "29px", color: "#8A8A8F" }}>
                                    Акции и скидки для постоянных клиентов
                                </p>
                            </div>

                            <div style={{ width: "1px", height: "100%", backgroundColor: "#EFEFF4" }} />

                            <div>
                                <img src="./img/Star Icon.png" style={{ width: "43.22px", height: "43px" }} />
                                <p className = "font" style = {{ fontSize: "14px", width: "150px", lineHeight: "18.2px", marginBlockStart: "0", marginBlockEnd: "0", marginTop: "26px", color: "#8A8A8F" }}>
                                    Качественные услуги и сервис
                                </p>
                            </div>

                            <div style={{ width: "1px", height: "100%", backgroundColor: "#EFEFF4" }} />

                            <div>
                                <img src="./img/Vector.png" style={{ width: "37px", height: "28px", marginTop: "12px" }} />
                                <p className = "font" style = {{ fontSize: "14px", width: "180px", lineHeight: "18.2px", marginBlockStart: "0", marginBlockEnd: "0", marginTop: "29px", color: "#8A8A8F" }}>
                                    Широкий ассортимент товаров
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div style={{ marginTop: "60px" }}>
                        <p className="font" style={{ color:"black",fontSize: "24px", lineHeight: "31.2px", textAlign: "left", width: "841px" }}>Популярные категории</p>

                        <div style={{ display: "grid", gridTemplateColumns: "280px 280px 280px", gridTemplateRows: "294.4px 294.4px", marginTop: "24px" }}>                         
                            <PopularCategoriesList />                        
                        </div>
                    </div>

                    <div style={{ marginTop: "60px" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "841px" }}>
                            <p className="font" style={{ fontSize: "24px", lineHeight: "31.2px", textAlign: "left", color: "black" }}>Новинки</p>
                            <p className="font" style={{ fontSize: "12px", lineHeight: "18px", textAlign: "left", color: "#2D9CEE" }}>Посмотреть все новинки</p>
                        </div>

                        <div className="new-prod-list">
                            <div className="new-prod-list-block" style={{ display: "flex", flexDirection: "row", width: "841px", columnGap: "22px", overflow: "hidden" }}>
                                <NewItemsBlock />                    
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "60px" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "841px" }}>
                            <p className="font" style={{ fontSize: "24px", lineHeight: "31.2px", textAlign: "left", color: "black" }}>Хиты продаж</p>
                            <p className="font" style={{ fontSize: "12px", lineHeight: "18px", textAlign: "left", color: "#2D9CEE" }}>Посмотреть все хиты продаж</p>
                        </div>
                        
                        <HitsProdBlock />                     
                    </div>
                    
                    <div style={{ marginTop: "60px", width: "841px", display:"flex", justifyContent:"center" }}>
                        <div style={{ display:"flex", width: "836px" }}>
                            <div style={{width: "567px", height: "287px"}}>
                                <p className="font24" style={{ color:"black", width:"476px"}}> INTEC:Universe LITE - интернет-магазин с конструктором дизайна на редакции 1C-Битрикс «СТАРТ» </p>
                                <p className="font14" style={{ color:"black", width:"516px", marginTop:"20px"}}> INTEC.UniverseLite - первый конструктор интернет-магазинов на редакции «СТАРТ» 1C-Битрикс. Решение идеально подойдет для быстрого запуска современного и многофункционального интернет-магазина на редакции «СТАРТ», без лишних расходов и привлечения сторонних специалистов. INTEC.UniverseLite может легко трансформироваться в отраслевое решение любой сферы бизнеса </p>
                                <p className="font14" style={{ color:"#2D9CEE", marginTop:"22px"}}> Подробнее </p>
                            </div>
                            <div>
                                <img src='./img/image 17.png'/>  
                            </div>   
                        </div>
                    </div>   

                    <div style={{ marginTop: "60px" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "838px" }}>
                            <p className="font24" style={{ color: "black" }}>Статьи</p>
                        </div>

                        <div className="new-prod-list">
                            <div className="new-prod-list-block" style={{ display: "flex", flexDirection: "row", width:"100%", columnGap:"22px", height:"100%" }}>    
                                <div style={{ display:"flex", flexDirection:"column", marginTop:"12px" }}>
                                    <div style={{ width:"261px", height:"170px", display:"flex", alignItems:"center" }}><img src='./img/image 16.png' /></div>

                                    <p className="font18" style={{ color:"black", width:"245px" }}> Оставьте отзыв, чтобы помочь другим </p>
                                    <p className="font14" style={{ width:"260px", marginTop:"18px" }}> Стильная и независимая. Легко управляйте средствами на вашем счёте. Получайте информацию о ваших финансах, платежах и переводах при помощи сообщений. </p>
                                </div>    

                                <div style={{ display:"flex", flexDirection:"column", marginTop:"12px" }}>
                                    <div style={{ width:"261px", height:"170px", display:"flex", alignItems:"center" }}><img style={{ marginLeft: "-36px"}} src='./img/image 1 (1).png' /></div>

                                    <p className="font18" style={{ color:"black", width:"245px" }}> Где купить терминал для эквайринга </p>
                                    <p className="font14" style={{ width:"260px", marginTop:"18px" }}> Стильная и независимая. Легко управляйте средствами на вашем счёте. Получайте информацию о ваших финансах, платежах и переводах при помощи сообщений. </p>
                                </div>  

                                <div style={{ display:"flex", flexDirection:"column", marginTop:"12px" }}>
                                    <div style={{ width:"261px", height:"170px", display:"flex", alignItems:"center" }}><img style={{ marginLeft: "-18px"}} src='./img/image 2.png' /></div>

                                    <p className="font18" style={{ color:"black", width:"245px" }}> Как выбрать свой идеальный телефон </p>
                                    <p className="font14" style={{ width:"260px", marginTop:"18px" }}> Подключите автоплатёж и будьте уверены, что налог оплачен в срок. Вам не придётся тратить время на поиск суммы к уплате в личном кабинете налогоплательщика. </p>
                                </div>      
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "60px" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "838px" }}>
                            <p className="font18" style={{ color: "black" }}> Широкий ассортимент и высокое качество </p>
                        </div>

                        <p className="font14" style={{ color: "black", marginTop:"24px" }}>
                            Каждый из нас понимает очевидную вещь: постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения дальнейших направлений развития. Как уже неоднократно упомянуто, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Являясь всего лишь частью общей картины, непосредственные участники технического прогресса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
                        </p>

                        <img src="./img/Rectangle 38.png" style={{ position: "absolute", marginTop:"-110px"}}/>

                        <p className="font12" style={{ color: "#2D9CEE", marginTop:"21px" }}> Читать далее </p>
                    </div>  
                </div>
            </div>    
        </div>
    </main>

    <Footer />
    </>
  )
}


function Burger() {
    let BurgerList = document.querySelector(".Burger")

    if (BurgerList.classList.contains('Burger-anti')) {
        BurgerList.classList.remove('Burger-anti'); // Если есть - убираем
    } else {
        BurgerList.classList.add('Burger-anti'); // Если нет - добавляем
    }
}