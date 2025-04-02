import React, { useState, useEffect } from 'react';

export function Swiper() {
    const swiperData = [
    {
        backgroundImage: "url('./img/man.png')",
        title: "Ноутбуки, планшеты и компьютеры",
        text: "Верные помощники для удаленки!",
        gradOpacity: "1",
    },
    {
        backgroundImage: "url('./img/marc.png')",
        title: "Товары для вашего любимца",
        text: "По доступным ценам",
        gradOpacity: "1",
    },
    {
        backgroundImage: "url('./img/redp.png')",
        title: "Модный интернет магазин",
        text: "Одежды, обуви и аксессуаров",
        gradOpacity: "0",
    },
    {
        backgroundImage: "url('./img/iphone11.png')",
        title: "Берите выше. iPhone 11",
        text: "Дополнительная выгода 6 000 рублей",
        gradOpacity: "0",
    },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % swiperData.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [index, swiperData.length]);

    const currentSlide = swiperData[index];

    return (
        <div className="swiper-block" style={{ backgroundImage: currentSlide.backgroundImage }}>
            <div className="swiper-grad" style={{ opacity: currentSlide.gradOpacity }}></div>

            <p className="swiper-title white-font">{currentSlide.title}</p>
            <p className="swiper-text white-font" style={{ fontSize: "18px" }}>
                {currentSlide.text}
            </p>

            <div className="swiper-icons">
                {
                    swiperData.map((key, iconIndex) => (
                        <div key={iconIndex} className="swiper-icons-blocks" style={{ opacity: iconIndex === index ? 1 : 0.3 }} />
                    ))
                }
            </div>
        </div>
    );
};