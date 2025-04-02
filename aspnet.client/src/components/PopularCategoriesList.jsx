import "../App.css";

import React, { useState, useEffect } from 'react';
import axios from '../../../../node_modules/axios/index';
export function PopularCategoriesList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('https://localhost:7208/PopularCategories');
            setCategories(response.data);

        };

        fetchCategories();
    }, []);

    return (
        <>
            {
                categories.map(category =>
                (
                <>
                    <div className="categories-big-list-block">
                        <img src={category.img} style={{ marginTop: "-30px" }} /> <p className="font cat-big-list-block-align-text" style={{ color: "black" }}> {category.category} </p>
                    </div>
                </>
                ))
            }
        </>
    )
};

/* 
    <div className="categories-big-list-block">
        <img src="./img/image 13.png" style={{ marginTop: "-30px" }} /> <p className="font cat-big-list-block-align-text" style={{ color: "black" }}>Одежда</p>
    </div>
    <div className="categories-big-list-block">
        <img src="./img/image 12.png" style={{ marginTop: "-30px" }} /> <p className="font cat-big-list-block-align-text" style={{ color: "black" }}>Мебель</p>
    </div>
    <div className="categories-big-list-block">
        <img src="./img/image 14.png" style={{ marginTop: "-30px" }} /> <p className="font cat-big-list-block-align-text" style={{ color: "black" }}>Бытовая техника</p>
    </div>
    <div className="categories-big-list-block">
        <img src="./img/image 11.png" style={{ marginTop: "-30px" }} /> <p className="font cat-big-list-block-align-text" style={{ color: "#000000" }}>Спортивные товары</p>
    </div>
    <div className="categories-big-list-block">
        <img src="./img/6002171190 2.png" style={{ marginTop: "-30px" }} /> <p className="font cat-big-list-block-align-text" style={{ color: "#000000" }}>Косметика</p>
    </div>
    <div className="categories-big-list-block">
        <img src="./img/image 15.png" style={{ marginTop: "-30px" }} /> <p className="font cat-big-list-block-align-text" style={{ color: "#000000" }}>Садовая техника</p>
    </div>
*/