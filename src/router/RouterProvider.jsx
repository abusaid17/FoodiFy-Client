import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/layout/MainLayout.jsx";
import Menu from "../Components/Pages/Menu/Menu/Menu.jsx";
import Home from "../Components/Pages/Home/Home/Home.jsx";
import OrderFood from "../Components/Pages/OrderFood/OrderFood/OrderFood.jsx";
import Register from "../Components/Pages/Register/Register.jsx";
import Login from "../Components/Pages/Login/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Secret from "../Components/Pages/Secret/Secret.jsx";
import Dashboard from "../Components/layout/Dashboard.jsx";
import Cart from "../Components/Pages/Dashboard/Cart/Cart.jsx";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers.jsx";
import AddItems from "../Components/Pages/Dashboard/AddItemsCart/AddItemsCart.jsx";
import AdminRoute from "./AdminRoute.jsx";
import ManageItems from "../Components/Pages/Dashboard/ManageItems/ManageItems.jsx";
import UpdateItem from "../Components/Pages/Dashboard/UpdateItem/UpdateItem.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/orderfood/:category",
                element: <OrderFood></OrderFood>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }

        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Normal user routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // admin user route
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/menu/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);
