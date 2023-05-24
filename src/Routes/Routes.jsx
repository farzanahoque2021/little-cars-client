import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoutes";
import SingleToy from "../pages/Home/SingleToy/SingleToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>

            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            }
        ]

    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);
export default router;