import { useRoutes } from "react-router-dom";
import authRouter from "./authRouter.jsx";

import { UserRoute, AdminRoute, SuperAdminRoute } from "./rolesRoutes";

import Home from "../pages/Home";
import Organization from "../pages/Organization.jsx";
import Organizations from "../pages/Organizations.jsx";
import NewOrg from "../pages/NewOrg.jsx";

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
            path: "/*",
            element: (
                <SuperAdminRoute>
                    <Home />
                </SuperAdminRoute>
            ),
        },
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
            path: "/newOrg",
            element: (
                <SuperAdminRoute>
                    <NewOrg />
                </SuperAdminRoute>

            ),
        },

    ];

    return useRoutes(routes);
};

export default AppRouter;
