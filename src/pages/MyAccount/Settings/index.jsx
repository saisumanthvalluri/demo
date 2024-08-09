import React, { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import DynamicForm from "../../../Components/DynamicForm";
import { deliveryAddressFields } from "../../../Config/constants";
import { IoChevronBack } from "react-icons/io5";
import "./index.css";

const Settings = ({ back }) => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="settings-bg">
            {back && (
                <button onClick={back} className="back-btn">
                    <IoChevronBack /> Back
                </button>
            )}
            <div className="nav-tabs">
                <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>
                    Profile Settings
                </button>
                <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? "active" : ""}>
                    Address
                </button>
            </div>
            {activeTab === 1 ? (
                <ProfileSettings />
            ) : (
                // Address Settings
                <div className="address-box">
                    <h3>Add Delivery Details</h3>
                    <DynamicForm fields={deliveryAddressFields} />
                    <button className="save-btn">Save</button>
                </div>
            )}
        </div>
    );
};

export default Settings;
