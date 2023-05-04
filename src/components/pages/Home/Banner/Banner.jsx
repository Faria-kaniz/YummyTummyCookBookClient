import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="relative w-full">
            <img
                src="https://i.ibb.co/K5PWs4B/restaurant-interior.jpg"
                alt=""
            />
            <h1 className="absolute animate-text bg-gradient-to-r from-teal-500 via-orange-500 to-white-500 bg-clip-text text-transparent text-white text-5xl top-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Welcome To Our Cook Book
            </h1>
        </div>
    );
};

export default Banner;