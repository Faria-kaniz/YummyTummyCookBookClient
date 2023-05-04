import React from "react";
import { Outlet } from "react-router-dom";
import Footer from '../pages/Shared/Footer/Footer';
import Header from "../pages/Shared/Header/Header";
import './Main.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
    return (
        <div>
            <ToastContainer />
            <Header></Header>
            <div id="outletDiv">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
