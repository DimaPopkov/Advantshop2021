import "../App.css";

import React, { useState, useEffect } from 'react';
import axios from '../../../../node_modules/axios/index';

import { Stars } from './NewItemsBlock';
import { QuantityColorText } from './NewItemsBlock';
import { Adaptive } from './NewItemsBlock';

export function HitsProdBlock() {
    const [Products, setProduct] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    const productsPerPage = 3;

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://localhost:7208/Products');
            setProduct(response.data);
        };

        fetchProducts();
    }, []);

    /*
    const massiveItems = 
    [
        {
            id: 4,
            text: "Краски для сухих помещений",
            image: "./img/image 21.png",
            stars: ["1", "1", "1", "1", "0"], // 0 - netu, 1 - est
            nalichie: "В наличии", // 0 - nemahtung, 1 - pokupay
            price: "16 790 руб.",
        },
        {
            id: 5,
            text: "Блузка Concept",
            image: "./img/image 22.png",
            stars: ["1", "1", "1", "1", "0"], // 0 - netu, 1 - est
            nalichie: "В наличии", // 0 - nemahtung, 1 - pokupay
            price: "23 600 руб.",
        },
        {
            id: 6,
            text: 'Диван Лени Textile Rustic',
            image: "./img/image 23.png",
            stars: ["1", "1", "1", "1", "0"], // 0 - netu, 1 - est
            nalichie: "В наличии", // 0 - nemahtung, 1 - pokupay
            price: "426 000 руб.",
        },
    ];
    */

    const getNextArrowSrc = () => {
        if (startIndex >= Products.length - productsPerPage) {
            return "./img/стрелка1.png"; // Картинка для неактивной стрелки
        } else {
            return "./img/стрелка2.png"; // Картинка для активной стрелки
        }
    };

    const getPrevArrowSrc = () => {
        if (startIndex == 0) {
            return "./img/стрелка1.png"; // Картинка для неактивной стрелки
        } else {
            return "./img/стрелка2.png"; // Картинка для активной стрелки
        }
    };

    const handlePrevClick = () => {
        setStartIndex(Math.max(0, startIndex - productsPerPage)); // Предотвращаем отрицательные значения
    };

    const handleNextClick = () => {
        setStartIndex(Math.min(Products.length - productsPerPage, startIndex + productsPerPage)); // Предотвращаем выход за пределы массива
    };


    let tovall = Products.length;  

    let CourentProducts = Products.slice(startIndex, startIndex + 3);

    return (
        <>
            <div className="new-prod-list">
                <div className="new-prod-list-block" style={{ display: "flex", flexDirection: "row", width: "841px", columnGap: "22px", overflow: "hidden" }}>
                {           
                    CourentProducts.map((item, index) =>
                    (
                        <div className="new-prod-list-block" key={index}>
                            <div className="new-prod-list-block-pic">
                                <div style={{ width: "264px", height: "230px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={item.img} />
                                </div>

                                <div style={{ display: "flex", flexDirection: "row", columnGap: "2px", marginTop: "0px" }}>
                                    <div className="new-prod-list-block-pic-card" style={{ width: "30px", height: "1px", backgroundColor: "#2D9CEE" }} ></div>
                                </div>
                            </div>

                            <div className="new-prod-list-block-info">
                                <div style={{ display: "flex", alignItems: "center", height: "37px" }}>
                                    <p className="font" style={{ color: "black", width: "251px" }}>
                                        {item.name}
                                    </p>
                                </div>

                                <div className="item-stars" style={{ marginTop: "5px", marginLeft: "-1px" }}>
                                    {Stars(item)}
                                </div>

                                <p className="font nal-font" style={{ marginTop: "15px", fontSize: "12px", lineHeight: "18px", color: item.quantity > 0 ? "#1EC17B" : "red" }}>
                                    {QuantityColorText(item)}
                                </p>

                                <p className="font" style={{ marginTop: "6px", fontSize: "24px", lineHeight: "31.2px", color: "black", display: "flex", columnGap: "4px" }}>
                                    {Adaptive(item)}

                                    <button style={{ color: "#2D9CEE", background: "none", border: "none", display: "flex", alignItems: "center", columnGap: "4px" }}>
                                        <img style={{ marginTop: "-3px" }} src="./img/корзина 2.png" />
                                        <p style={{}}>В корзину</p>
                                    </button>
                                </p>
                            </div>
                        </div>                 
                    ))
                }
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "42px", width: "841px", alignItems: "center", columnGap: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", columnGap: "4px" }}>
                    <button style={{ width: "50px", height: "50px", borderColor: "#EFEFF4", borderWidth: "1px", borderStyle: "solid" }} onClick={handlePrevClick}><img style={{ rotate: "180deg" }} src={getPrevArrowSrc()}/></button>
                    
                    <button style={{ width: "50px", height: "50px", borderColor: "#EFEFF4", borderWidth: "1px", borderStyle: "solid" }} onClick={handleNextClick}><img src={getNextArrowSrc()}/></button>
                </div>

                <div style={{ display: "flex", alignItems: "center", columnGap: "29px" }}>
                    <p className="font" style={{ color: "#000000" }}> Вы посмотрели {0} из {tovall} товаров </p>
                    <button style={{ width: "151px", height: "50px", borderColor: "#EFEFF4", borderWidth: "1px", borderStyle: "solid", color: "#2D9CEE" }} className="font14"> Показать еще </button>
                </div>
            </div>                      
        </>
    );
}

/*
    <button style={{ width: "50px", height: "50px", borderColor: "#EFEFF4", borderWidth: "1px", borderStyle: "solid", color: "#C8C7CC" }} className="font14"> 1 </button>
    <button style={{ width: "50px", height: "50px", borderColor: "#EFEFF4", borderWidth: "1px", borderStyle: "solid", color: "#C8C7CC" }} className="font14"> 2 </button>
    <button style={{ width: "50px", height: "50px", borderColor: "#EFEFF4", borderWidth: "1px", borderStyle: "solid", color: "#C8C7CC" }} className="font14"> 3 </button>
*/