import React, { useState } from "react";

import "./index.css";
import DynamicFormWithHandlers from "../../../../Components/DyamicFormWithHandlers";
import { changePasswordFields, profileDetailsFields } from "../../../../Config/constants";
import DeleteAccount from "./DeleteAccount";

const ProfileSettings = () => {
    const [activeTab, setActiveTab] = useState(1);

    const renderRespectiveSection = () => {
        switch (activeTab) {
            case 1:
                return (
                    <>
                        <DynamicFormWithHandlers fields={profileDetailsFields} />
                        <button className="save-btn">Save</button>
                    </>
                );
            case 2:
                return (
                    <>
                        <DynamicFormWithHandlers fields={changePasswordFields} />
                        <button className="save-btn">Save</button>
                    </>
                );
            case 3:
                return <DeleteAccount />;
            default:
                return null;
        }
    };

    return (
        <div className="ps-bg">
            <div className="nav-tabs-box">
                <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>
                    Profile Details
                </button>
                <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? "active" : ""}>
                    Change Password
                </button>
                <button onClick={() => setActiveTab(3)} className={activeTab === 3 ? "active" : ""}>
                    Delete Account
                </button>
            </div>
            <div className="form-container">{renderRespectiveSection()}</div>
        </div>
    );
};

export default ProfileSettings;
