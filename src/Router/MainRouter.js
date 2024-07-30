// src/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import LandingPage from "../pages/LandingPage";
import Jobs from "../pages/Jobs";
import NotFound from "../pages/NotFound";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default MainRouter;
