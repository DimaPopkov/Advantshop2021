import "../App.css";

import React, { useState, useEffect } from 'react';
import axios from '../../../../node_modules/axios/index';

export function Adaptive(item)
{
    if (item.price > 1000000) {
        return (
            <span style={{ fontSize:"20px" }}>
                {item.price.toLocaleString('ru-RU')} руб.          
            </span>
        )
    }
    if (item.price > 10000000) {
        return (
            <span style = {{ fontSize: "16px" }}>
                {item.price.toLocaleString('ru-RU')} руб.
            </span>
        )
    }
    else {
        return (
            <>
                {item.price.toLocaleString('ru-RU')} руб.
            </>
        )
    }
}
export function QuantityColorText(item)
{
    if (item.quantity > 0) {
        return ("В наличии")
    }
    else {
        return ("Нет в наличии")
    }
}
export function Stars(item) {
    let i = 0;

    let grayStars = 5 - item.rating;
    let stars = [0,0,0,0,0];
    for (i; i < item.rating; i++) {
        stars[i] = 1;
    }

    for (let ident = 4; grayStars > 0; grayStars--, ident--) {
        stars[ident] = 0;
    }

    return(
        stars.map((_, index) => (
            <>
                <img src={ stars[index] == 1 ? "./img/Star Icon3.png" : "./img/Star Icon2.png" } />
            </>
        ))
    )
}
export function NewItemsBlock() {
    const [Products, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://localhost:7208/Products');
            setProduct(response.data);
        };

        fetchProducts();
    }, []);

    //let arg = 2;

    return (
    <>
    { 
        Products.map((item, index) => 
        (
            <div className="new-prod-list-block" key={index}>
                <div className="new-prod-list-block-pic">
                    <div style={{ width: "264px", height:"230px", display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <img src={ item.img } />
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", columnGap: "2px", marginTop: "0px" }}>
                        <div className="new-prod-list-block-pic-card" style={{ width: "30px", height: "1px", backgroundColor: "#2D9CEE" }} ></div>
                    </div>
                </div>

                <div className="new-prod-list-block-info">
                    <div style={{ display:"flex", alignItems:"center", height:"37px" }}>
                        <p className="font" style={{ color: "black", width: "251px" }}>
                            { item.name }
                        </p>
                    </div>

                    <div className="item-stars" style={{ marginTop:"5px", marginLeft: "-1px" }}>                           
                        { Stars(item) }                                     
                    </div>

                    <p className="font nal-font" style={{ marginTop: "15px", fontSize: "12px", lineHeight: "18px", color: item.quantity > 0 ? "#1EC17B" : "red" }}>                      
                        { QuantityColorText(item) }
                    </p>

                    <p className="font" style={{ marginTop: "6px", fontSize: "24px", lineHeight: "31.2px", color: "black", display: "flex", columnGap: "4px" }}>
                        { Adaptive(item) }

                        <button style={{ color: "#2D9CEE", background: "none", border: "none", display: "flex", alignItems: "center", columnGap: "4px" }}>
                            <img style={{ marginTop: "-3px" }} src="./img/корзина 2.png" />
                            <p style={{}}>В корзину</p>
                        </button>
                    </p>
                </div>
            </div>
        ))
    }
    </>
    );
    
}