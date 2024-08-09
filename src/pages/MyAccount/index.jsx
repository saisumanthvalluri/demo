import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DynamicHeader from "../../Components/DynamicHeader";
import DynamicProgressBar from "../../Components/DynamicProgressBar";
import Footer from "../../Components/Footer";
import Wallet from "./Wallet";
import { profileMenu, profileMenuLg } from "../../Config/constants";
import "./index.css";
import SavedJobs from "./SavedJobs";
import ReferAndEarn from "./ReferAndEarn";
import Settings from "./Settings";

const MyAccount = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(null);
    const [lgActiveSection, setLgActiveSection] = useState(profileMenuLg[0].id);

    const handleBack = () => {
        setActiveSection(null);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeSection, lgActiveSection]);

    const renderMenuSection = ({ secName, items, type }) => (
        <div className="menu-section">
            <span className="sec-name">{secName}</span>
            <ul>
                {items.map(({ id, icon: Icon, name, amount }) => (
                    <li key={id} className={type === "Payment" ? "payment" : ""} onClick={() => setActiveSection(id)}>
                        {Icon && <Icon className="menu-item-icon" />}
                        <span>{name}</span>
                        {type === "normal" && <MdOutlineKeyboardArrowRight className="arrow" />}
                        {type === "Payment" && <span className="amount">{amount}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );

    const getSectionName = () => profileMenuLg.find(({ id }) => id === lgActiveSection)?.name;

    const renderRespectiveSection = (secId, back) => {
        switch (secId) {
            case profileMenuLg[0].id: // Wallet section
                return <Wallet back={back} />;
            case profileMenuLg[1].id: // OTR section
                return <Wallet back={back} />;
            case profileMenuLg[2].id: //Saved Jobs section
                return <SavedJobs back={back} />;
            case profileMenuLg[3].id: // Saved PYQS section
                return <Wallet back={back} />;
            case profileMenuLg[4].id: // Refer and Earn section
                return <ReferAndEarn back={back} />;
            case profileMenuLg[5].id: // Help and Support section
                return <Wallet back={back} />;
            case profileMenuLg[6].id: // Settings section
                return <Settings back={back} />;

            default:
                return null;
        }
    };

    return (
        <>
            <DynamicHeader type="inner" />
            <div className="my-acc-bg-mob">
                {activeSection === null ? (
                    <>
                        <div className="profil-details-box">
                            <div className="photo-box">
                                <img src="/profile/profile-photo.svg" alt="profile" />
                                <div className="edit-icon-box">
                                    <FaRegEdit />
                                </div>
                            </div>
                            <div className="basic-details">
                                <h3>Vanshita</h3>
                                <p className="spn-id">SPN ID | 95652453</p>
                                <div className="otr-progress-box">
                                    <div className="percent-val-box">
                                        <span>Complete Your OTR Form</span>
                                        <p>90%</p>
                                    </div>
                                    <DynamicProgressBar val={90} />
                                </div>
                                <p className="caption">Get the best out by adding the remaining details!</p>
                            </div>
                        </div>
                        <div className="profile-menu-box">
                            {profileMenu.map(renderMenuSection)}
                            <button onClick={() => navigate("/auth")}>
                                <CiLogout className="icon" /> Logout
                            </button>
                        </div>
                    </>
                ) : (
                    // <Wallet handleBack={handleBack} />
                    renderRespectiveSection(activeSection, handleBack)
                )}
                <Footer />
            </div>

            <div className="my-acc-bg-lg">
                <div className="inner">
                    <div className="left">
                        <span className="my-acc-tag">My Account</span>
                        <div className="side-bar">
                            <div className="photo-box">
                                <img src="/profile/profile-photo.svg" alt="profile" />
                                <div className="edit-icon-box">
                                    <FaRegEdit />
                                </div>
                            </div>
                            <p>
                                <span>Name: </span> Vashita
                            </p>
                            <p>
                                <span>SPN ID: </span> AP125XXXXX
                            </p>
                            <hr />
                            <ul className="prof-menu-list">
                                {profileMenuLg.map(({ id, icon: Icon, name }) => (
                                    <li
                                        key={id}
                                        onClick={() => setLgActiveSection(id)}
                                        className={lgActiveSection === id ? "active" : ""}>
                                        <Icon className="icon" />
                                        <span>{name}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => navigate("/auth")} className="logout-btn">
                                <CiLogout className="icon" /> Logout
                            </button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="breadcrums">
                            <MdOutlineKeyboardArrowRight className="icon" />
                            <span>{getSectionName()}</span>
                        </div>
                        {renderRespectiveSection(lgActiveSection)}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default MyAccount;
