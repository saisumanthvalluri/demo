import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import { Divider } from "@mui/material";

const MobileDrawer = ({ open, toggleDrawer, type }) => {
    const location = useLocation();
    const navigate = useNavigate();
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
                            <span>Upcoming Jobs</span>
                        </li>
                    </ul>
                )}
                <Divider color="#fff" />
                <ul className="inner">
                    <li
                        onClick={() => navigate("/my-account")}
                        className={activePath === "/my-account" ? "active" : ""}>
                        <AccountCircleOutlinedIcon />
                        <span>My Account</span>
                    </li>
                </ul>
                <Divider color="#fff" />
                {type === "outer" && <button onClick={() => navigate("/auth")}>Login</button>}
                {type === "inner" && (
                    <button onClick={() => navigate("/otr")} className="otr-btn">
                        OTR
                    </button>
                )}
            </div>
        </Drawer>
    );
};

export default MobileDrawer;
