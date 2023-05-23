import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";


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
                element: <AddToy></AddToy>

            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            },
            // {
            //     path: '/mytoys/updatetoy/:id',
            //     element: <UpdateToy></UpdateToy>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/updatedtoy/${params.id}`)
            // },
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
]);
export default router;