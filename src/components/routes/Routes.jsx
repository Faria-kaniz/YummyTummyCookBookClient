import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Blog from "../pages/Blog/Blog";
import Chefs from "../pages/Home/Chefs/Chefs";
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login/Login';
import Register from "../pages/Login/Register/Register";
import About from "../pages/Shared/About/About";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/chefs",
                element: (
                    <PrivateRoute>
                        <Chefs></Chefs>
                    </PrivateRoute>
                ),
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;
