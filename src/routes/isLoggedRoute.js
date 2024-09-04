import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const IsLoggedRoute = ({ children }) => {
    const navigate = useNavigate();

    const isLogged = useSelector((store) => store.auth.isLogged);
    console.log({ "isLogged": isLogged });

    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }
    }, [isLogged, navigate]);

    // Only render children if not logged in
    if (!isLogged) {
        return children;
    }

    return null;  // Return null if the user is logged in
};

export default IsLoggedRoute;