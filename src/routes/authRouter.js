import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgotPassword from "../pages/ForgotPassword";
import Home from '../pages/Home';


export default authRouter = [
    {
        path: "/login",
        element: (
            <Login />
        ),
    },
    {
        path: "/register",
        element: (
            <Register />
        ),
    },
    {
        path: "/forgot-password",
        element: (
            <ForgotPassword />
        ),
    },
];

