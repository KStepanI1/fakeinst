import React from "react";
// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "../routeConfig/routeConfig";
// import { getUserAuthData } from "entities/User";

const RequireAdmin = ({ children }: { children: JSX.Element }) => {
    // const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const isAdmin = false;

    // if (auth?.user?.role !== UserRole.ADMIN) {
    if (isAdmin) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    return children;
};

export default RequireAdmin;
