// src/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import LandinPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import ResetPassword from "../pages/Auth/ResetPassword";
import Jobs from "../pages/Jobs";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandinPage />} />
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
