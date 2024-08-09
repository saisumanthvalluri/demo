// src/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import LandinPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import ResetPassword from "../pages/Auth/ResetPassword";
import Jobs from "../pages/Jobs";
import Notifications from "../pages/Notifications";
import JobDetails from "../pages/JobDetails";
import OTR from "../pages/OTR";
import MyAccount from "../pages/MyAccount";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandinPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/job" element={<JobDetails />} />
                <Route path="/alerts" element={<Notifications />} />
                <Route path="/otr" element={<OTR />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default MainRouter;
