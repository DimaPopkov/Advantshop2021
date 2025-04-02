import '../App.css';

import React, { useState, useEffect } from 'react';
import axios from '../../../../node_modules/axios/index';

/*
export function CategoriesList() {
    
    const categories2 = axios.get('https://localhost:7208/Categories');

 
    const categories =  
    [
        { text: "Одежда", id: 0 }, 
        { text: "Мебель", id: 1 }, 
        { text: "Бытовая техника", id: 2 }, 
        { text: "Спортивные товары", id: 3 }, 
        { text: "Косметика", id: 4 }, 
        { text: "Садовая техника", id: 5 },
        { text: "Сантехника", id: 6 },
        { text: "Строительные материалы", id: 7 },
        { text: "Автотехника", id: 8 },
        { text: "Еда", id: 9 },
        { text: "Разработка сайтов", id: 10 },
    ]
    

    return(
    <>
    {   
        categories2.map((category) => {
            return(
            <>
                <p className="font categories-list-block"> { category.text }
                    <img src="../img/выпадайка2.png" />
                </p>
                    <p className="separator" aria-hidden="true"></p>
            </>  
            );
        }) 
    }
    </>
    );
}*/
export function CategoriesList()
{
    const [categories, setCategories] = useState([]);

    useEffect(() =>
    {
        const fetchCategories = async () =>
        {
            const response = await axios.get('https://localhost:7208/Categories');
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
                    <p key={category.categoryId} className="font categories-list-block">
                        { category.category }
                        <img src="../img/выпадайка2.png"/> 
                    </p>
                    <p className="separator" aria-hidden="true"></p>
                </>
                ))
            }
        </>
    );
}