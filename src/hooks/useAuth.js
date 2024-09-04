import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = (requiredRoles = []) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    const isLogged = useSelector((store) => store.auth.isLogged);
    console.log({ "isLogged": isLogged })

    const userRole = useSelector((store) => store.user.currentUser?.role);


    useEffect(() => {
        if (!isLogged) {
            navigate("/login"); // Redirect to login if not logged in
        } else if (requiredRoles.length > 0 && !requiredRoles.includes(userRole)) {
            alert('no permissions!');
            navigate('/'); // Redirect to home if role is not sufficient
        } else {
            setIsAuthorized(true);
        }
    }, [isLogged, userRole, requiredRoles, navigate]);

    return isAuthorized;
};

export default useAuth;