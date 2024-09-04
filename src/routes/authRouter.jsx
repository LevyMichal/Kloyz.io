import IsLoggedRoute from "./isLoggedRoute"


import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from "../pages/ForgotPassword";

const authRouter = [
    {
        path: "/login",
        element: (
            <IsLoggedRoute>
                <Login />
            </IsLoggedRoute>
        ),
    },
    {
        path: "/register",
        element: (
            <IsLoggedRoute>
                <Register />
            </IsLoggedRoute>
        ),
    },
    {
        path: "/forgot-password",
        element: (
            <IsLoggedRoute>
                <ForgotPassword />
            </IsLoggedRoute>
        ),
    },
];

export default authRouter;

