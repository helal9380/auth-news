import { createBrowserRouter } from "react-router-dom";
import LayOut from "./layout/LayOut";
import Login from "./layout/Components/Login/Login";
import Register from "./layout/Components/Register/Register";
import Home from "./layout/Components/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element:<LayOut></LayOut>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]

    }
])


export default routes