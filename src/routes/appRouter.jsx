import { useRoutes } from "react-router-dom";
import authRouter from "./authRouter.jsx";

import { UserRoute, AdminRoute, SuperAdminRoute } from "./rolesRoutes";

import Home from "../pages/Home";
import Admin from "../pages/Admin";
import SuperAdmin from "../pages/SuperAdmin";

const AppRouter = () => {
    const routes = [
        ...authRouter,
        {
            path: "/",
            element: (
                <UserRoute>
                    <Home />
                </UserRoute>
            ),
        },
        {
            path: "/admin",
            element: (
                <AdminRoute>
                    <Admin />
                </AdminRoute>
            ),
        },
        {
            path: "/super-admin",
            element: (
                <SuperAdminRoute>
                    <SuperAdmin />
                </SuperAdminRoute>
            ),
        },
    ];

    return useRoutes(routes);
};

export default AppRouter;
