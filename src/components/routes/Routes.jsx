import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Blog from "../pages/Blog/Blog";
import ChefDetails from "../pages/Home/Chefs/ChefDetails/ChefDetails";
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
                path: "/chef/:id",
                element: (
                    <PrivateRoute>
                        <ChefDetails></ChefDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://yummy-tummy-cook-book-server.vercel.app/chef/${params.id}`
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
