import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import "./index.css";
import DynamicHeader from "../../Components/DynamicHeader";
import Footer from "../../Components/Footer";

const notificationsData = [
    {
        id: 1,
        title: "Applied UPSC Application Successfully",
        time: "2024-06-11, 16:05:35",
        logo: "/landingPage/collaborators/upsc.svg",
        bgColor: "transparent",
    },
    {
        id: 2,
        title: "Applied UPSC Application Successfully",
        time: "2024-06-11, 16:05:35",
        logo: "/landingPage/collaborators/upsc.svg",
        bgColor: "transparent",
    },
    {
        id: 3,
        title: "Applied SSC GD Application Successfully",
        time: "2024-06-11, 16:05:35",
        logo: "/landingPage/collaborators/ssc.svg",
        bgColor: "#E0E0E0",
    },
];

const Notifications = () => {
    return (
        <>
            <DynamicHeader type="inner" />
            <div className="notifications-bg">
                <div className="title-bar">
                    <NotificationsActiveIcon />
                    <span>All Notifications</span>
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
