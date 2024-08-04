import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "../routeConfig/routeConfig";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    // const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const auth = false;

    if (!auth) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    return children;
};

export default RequireAuth;
