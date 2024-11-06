import { useRoutes } from "react-router-dom";
import authRouter from "./authRouter.jsx";

import { UserRoute, AdminRoute, SuperAdminRoute } from "./rolesRoutes";

import Home from "../pages/Home";
import Admin from "../pages/Admin";
import SuperAdmin from "../pages/SuperAdmin";
import Organization from "../pages/Organization.jsx";
import Organizations from "../pages/Organizations.jsx";

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
        // {
        //     path: "/admin",
        //     element: (
        //         <AdminRoute>
        //             <Admin />
        //         </AdminRoute>
        //     ),
        // },
        // {
        //     path: "/superadmin",
        //     element: (
        //         <SuperAdminRoute>
        //             <SuperAdmin />
        //         </SuperAdminRoute>
        //     ),
        // },
        {
            path: "/organizations",
            element: (
                <SuperAdminRoute>
                    <Organizations />
                </SuperAdminRoute>

            ),
        },
        {
            path: "/org/:id",
            element: (
                <SuperAdminRoute>
                    <Organization />
                </SuperAdminRoute>

            ),
        },
        {
            path: "/*",
            element: (
                <SuperAdminRoute>
                    <Home />
                </SuperAdminRoute>
            ),
        },
    ];

    return useRoutes(routes);
};

export default AppRouter;
