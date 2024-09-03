import useAuth from "../hooks/useAuth";

const SuperAdminRoute = ({ children }) => {
    const isAuthorized = useAuth(["SUPERADMIN"]);

    // Render the children if authorized, otherwise return null (since redirection is handled in the hook)
    return isAuthorized ? children : null;
};

const AdminRoute = ({ children }) => {
    const isAuthorized = useAuth(["SUPERADMIN", "ADMIN"]);
    return isAuthorized ? children : null;
};

const UserRoute = ({ children }) => {
    const isAuthorized = useAuth(["SUPERADMIN", "ADMIN", "USER"]);
    return isAuthorized ? children : null;
};

export { SuperAdminRoute, AdminRoute, UserRoute };