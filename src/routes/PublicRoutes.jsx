import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"

//pages
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"


export default function PublicRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </ >
    )
}
