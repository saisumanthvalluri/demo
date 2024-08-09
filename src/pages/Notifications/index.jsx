import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import "./index.css";
import DynamicHeader from "../../Components/DynamicHeader";
import Footer from "../../Components/Footer";
import { notificationsData } from "../../Config/constants";

const Notifications = () => {
    return (
        <>
            <DynamicHeader type="inner" />
            <div className="notifications-bg">
                <div className="title-bar">
                    <NotificationsActiveIcon />
                    <span>All Alerts</span>
                </div>
                <div className="filter-btn-box">
                    <button className="active">Application Status</button>
                    <button>Admit Card Release</button>
                    <button>Application History</button>
                </div>
                <ul className="notif-list">
                    {notificationsData.map((e) => (
                        <li key={e.id} style={{ background: e.bgColor }}>
                            <img src={e.logo} alt="logo" className="logo" />
                            <div className="detail">
                                <h3>{e.title}</h3>
                                <p>{e.time}</p>
                                <span>
                                    Check status of Your Application <CallMadeOutlinedIcon className="arrow" />
                                </span>
                            </div>
                            <DeleteOutlineOutlinedIcon className="del-icon" />
                        </li>
                    ))}
                </ul>
                <Footer />
            </div>
        </>
    );
};

export default Notifications;
