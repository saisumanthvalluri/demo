import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import "./index.css";
import MobileDrawer from "../Drawer";

const DynamicHeader = ({ type }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const activePath = location.pathname;

    // useEffect(() => {
    //     const handleHashChange = () => {
    //         const hash = window.location.hash;
    //         if (hash) {
    //             const targetElement = document.querySelector(hash);
    //             if (targetElement) {
    //                 targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    //             }
    //         }
    //     };

    //     // Initial check on component mount
    //     handleHashChange();

    //     // Add event listener for hash change
    //     window.addEventListener("hashchange", handleHashChange);

    //     // Clean up the event listener on component unmount
    //     return () => {
    //         window.removeEventListener("hashchange", handleHashChange);
    //     };
    // }, []);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div className="on-bg">
            <div className="logo-box">
                <h3>LOGO</h3>
                {type === "inner" && (
                    <button className="admit-card-btn">
                        <FileDownloadIcon className="icon" /> Admit Card
                    </button>
                )}
            </div>
            <div className="links">
                {type === "outer" && (
                    <ul>
                        <a href="#ABOUT">
                            <li>About Us</li>
                        </a>
                        <a href="#FAQS">
                            <li>Faq's</li>
                        </a>
                        <a href="#CONTACTUS">
                            <li>Contact Us</li>
                        </a>
                    </ul>
                )}

                {type === "inner" && (
                    <ul className="inner">
                        <Link to="/jobs">
                            <li className={activePath === "/jobs" ? "active" : ""}>
                                <WorkOutlinedIcon className="icon" />
                                <span>Jobs</span>
                            </li>
                        </Link>
                        <Link to="/alerts">
                            <li className={activePath === "/alerts" ? "active" : ""}>
                                <NotificationsActiveIcon className="icon" />
                                <span>Alerts</span>
                            </li>
                        </Link>
                        <li>
                            <RocketLaunchIcon className="icon" />
                            <span>Tracking</span>
                        </li>

                        <li>
                            <DateRangeIcon className="icon" />
                            <span>Upcoming jobs</span>
                        </li>
                    </ul>
                )}

                {type === "outer" && <button onClick={() => navigate("/auth")}>Login</button>}
                {type === "inner" && (
                    <button className="otr-btn" onClick={() => navigate("/otr")}>
                        OTR
                    </button>
                )}
                {type === "outer" && (
                    <>
                        <img src="/auth/india.svg" alt="india" />
                        <KeyboardArrowDownIcon className="down-arrow" />
                    </>
                )}

                {type === "inner" && (
                    <AccountCircleOutlinedIcon
                        className={activePath === "/my-account" ? "active account-icon" : "account-icon"}
                        onClick={() => navigate("/my-account")}
                    />
                )}
            </div>
            <MenuIcon className="hb-menu" onClick={() => setOpen(true)} />
            <MobileDrawer toggleDrawer={toggleDrawer} open={open} type={type} />
        </div>
    );
};

export default DynamicHeader;
