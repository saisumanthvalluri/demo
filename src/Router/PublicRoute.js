// src/components/PublicRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children, isAuthenticated }) => {
    const location = useLocation();
    console.log(location, "dkjfn");

    if (isAuthenticated) {
        return <Navigate to={location.state?.from || "/jobs"} replace />;
    }

    return children;
};

export default PublicRoute;
