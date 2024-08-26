import { Routes, Route } from "react-router-dom"
import ProtectRoute from "./ProtectRoute"

//pages
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProtectRoute><HomePage /></ProtectRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
            </Routes>
        </ >
    )
}
