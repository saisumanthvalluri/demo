import * as React from "react";
import Drawer from "@mui/material/Drawer";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HomeIcon from "@mui/icons-material/Home";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function TemporaryDrawer({ open, toggleDrawer, handleNavigateToLogin, type }) {
    const location = useLocation();
    const activePath = location.pathname;
    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <div className="mob-links">
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
                    <button className="admit-card-btn">
                        <FileDownloadIcon className="icon" /> Admit Card
                    </button>
                )}
                {type === "inner" && <Divider color="#fff" />}
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
                            <span>Upcoming Jobs</span>
                        </li>
                    </ul>
                )}
                <Divider color="#fff" />
                <ul className="inner">
                    <li>
                        <AccountCircleOutlinedIcon />
                        <span>My Account</span>
                    </li>
                </ul>
                <Divider color="#fff" />
                {type === "outer" && <button onClick={handleNavigateToLogin}>Login</button>}
                {type === "inner" && <button className="otr-btn">OTR</button>}
            </div>
        </Drawer>
    );
}
