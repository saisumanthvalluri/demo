import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./index.css";
import TemporaryDrawer from "../Drawer";

const DynamicHeader = ({ type }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const activePath = location.pathname;

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }
            }
        };

        // Initial check on component mount
        handleHashChange();

        // Add event listeners for window resize and hash change
        window.addEventListener("hashchange", handleHashChange);

        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const handleNavigateToLogin = () => {
        navigate("/auth");
    };

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
                                <HomeIcon className="icon" />
                                <span>Home</span>
                            </li>
                        </Link>
                        <Link to="/notifications">
                            <li className={activePath === "/notifications" ? "active" : ""}>
                                <NotificationsActiveIcon className="icon" />
                                <span>Notifications</span>
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

                {type === "outer" && <button onClick={handleNavigateToLogin}>Login</button>}
                {type === "inner" && <button className="otr-btn">OTR</button>}
                {type === "outer" && (
                    <>
                        <img src="/auth/india.svg" alt="india" />
                        <KeyboardArrowDownIcon className="down-arrow" />
                    </>
                )}

                {type === "inner" && <AccountCircleOutlinedIcon className="account-icon" />}
            </div>
            <MenuIcon className="hb-menu" onClick={() => setOpen(true)} />
            <TemporaryDrawer
                toggleDrawer={toggleDrawer}
                open={open}
                handleNavigateToLogin={handleNavigateToLogin}
                type={type}
            />
        </div>
    );
};

export default DynamicHeader;
