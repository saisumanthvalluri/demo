import React from "react";
import DynamicProgressBar from "../../../Components/DynamicProgressBar";
import './index.css'

const OTRForm = () => {
    return (
        <div className="otr-f-bg">
            <div className="otr-f-prog-box">
                <div className="percent-val-box">
                    <span>Complete Your OTR Form</span>
                    <p>90%</p>
                </div>
                <DynamicProgressBar val={90} barColor="#000C40" bgColor="#D9D9D9" />
                <p className="caption">Get the best out by adding the remaining details!</p>
            </div>
        </div>
    );
};

export default OTRForm;
