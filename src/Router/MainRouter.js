// src/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Auth from "../pages/Auth";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import ResetPassword from "../pages/Auth/ResetPassword";
import Jobs from "../pages/Jobs";
import Notifications from "../pages/Notifications";
import JobDetails from "../pages/JobDetails";
import OTR from "../pages/OTR";
import MyAccount from "../pages/MyAccount";
import ApplyThroughOTR from "../pages/ApplyThroughOTR";
// import useAuthStore from "../Store/useAuthStore";
import Toaster from "../Components/Toastify";
import PaymentDetails from "../pages/PaymentDetails";
const user = true;

const MainRouter = () => {
    // const { user } = useAuthStore();

    const ProtectedRoute = ({ element }) => {
        const location = useLocation();

        if (!user) {
            return <Navigate to="/" state={{ from: location }} />;
        }

        return element;
    };

    const AuthRoute = ({ element }) => {
        const location = useLocation();

        if (user) {
            return <Navigate to={location.state?.from?.pathname || "/jobs"} />;
        }

        return element;
    };
    return (
        <Router>
            {/* Toaster accessible for all pages */}
            <Toaster />
            <Routes>
                <Route path="/" element={<AuthRoute element={<LandingPage />} />} />
                <Route path="/auth" element={<AuthRoute element={<Auth />} />} />
                <Route path="/forgot-password" element={<AuthRoute element={<ForgotPassword />} />} />
                <Route path="/reset-password" element={<AuthRoute element={<ResetPassword />} />} />
                <Route path="/jobs" element={<ProtectedRoute element={<Jobs />} />} />
                <Route path="/job" element={<ProtectedRoute element={<JobDetails />} />} />
                <Route path="/apply-through-otr" element={<ProtectedRoute element={<ApplyThroughOTR />} />} />
                <Route path="/alerts" element={<ProtectedRoute element={<Notifications />} />} />
                <Route path="/otr" element={<ProtectedRoute element={<OTR />} />} />
                <Route path="/my-account" element={<ProtectedRoute element={<MyAccount />} />} />
                <Route path="/payment-details" element={<ProtectedRoute element={<PaymentDetails />} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default MainRouter;
