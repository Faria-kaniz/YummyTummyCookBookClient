import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import ClientReview from '../ClientReview/ClientReview';
import TopRecipe from '../TopRecipe/TopRecipe';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <TopRecipe></TopRecipe>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;